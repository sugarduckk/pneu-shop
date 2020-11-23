import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogButton from 'shared-lib/button/DialogButton';
import useForm from 'shared-lib/hook/useForm';
import TextInput from 'shared-lib/form-item/TextInput';
import Roles from '../../../../constant/Roles';
import useHttpsCallable from 'firebase-wrapper/function/useHttpsCallable';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import Dropdown from 'shared-lib/form-item/Dropdown';

const AddPermissionDialog = props => {
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const addUserRoleByEmail = useHttpsCallable('addUserRoleByEmail');
  const { form, onSubmit, disabled } = useForm({
    email: '',
    role: Roles[0].value
  }, values => {
    return addUserRoleByEmail(values)
      .then(() => {
        dismissDialog();
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return <div>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('email')} label='Email' />
        <Dropdown {...form('role')} label='Role' options={Roles} />
      </Fieldset>
      <DialogButtonLayout>
        <DialogButton type='button' disabled={disabled} onClick={dismissDialog}>dismiss</DialogButton>
        <DialogButton type='submit' disabled={disabled} loading={disabled}>submit</DialogButton>
      </DialogButtonLayout>
    </Form>
  </div>;
};

const useOnAddPermission = () => {
  const addDialog = useAddDialog();
  return React.useCallback(e => {
    addDialog(<AddPermissionDialog />);
  }, [addDialog]);
};

export default useOnAddPermission;