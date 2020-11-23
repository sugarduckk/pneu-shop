import React from 'react';
import useHttpsCallable from 'firebase-wrapper/function/useHttpsCallable';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogButton from 'shared-lib/button/DialogButton';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Dropdown from 'shared-lib/form-item/Dropdown';
import useForm from 'shared-lib/hook/useForm';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import Roles from '../../../../constant/Roles';

const EditRoleDialog = ({ email, uid, defaultRole }) => {
  const editUserRole = useHttpsCallable('editUserRole');
  const [loading, setLoading] = React.useState(false);
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const { form, onSubmit, disabled, values } = useForm({
    role: defaultRole
  }, values => {
    setLoading(true);
    return editUserRole({
      role: values.role,
      uid
    })
      .then(() => {
        setLoading(false);
        updateDialog(<MessageDialog message={`${email} is now ${values.role}.`} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return <div>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <Dropdown {...form('role')} label={`Change role for ${email}`} options={Roles} />
      </Fieldset>
      <DialogButtonLayout>
        <DialogButton type='button' disabled={disabled} onClick={dismissDialog}>dismiss</DialogButton>
        <DialogButton type='submit' disabled={disabled || defaultRole === values.role} loading={loading} >confirm</DialogButton>
      </DialogButtonLayout>
    </Form>
  </div>;
};

const useOnEditRole = (email, uid, defaultRole) => {
  const addDialog = useAddDialog();
  return React.useCallback(e => {
    addDialog(<EditRoleDialog email={email} uid={uid} defaultRole={defaultRole} />);
  }, [addDialog, email, uid, defaultRole]);
};

export default useOnEditRole;