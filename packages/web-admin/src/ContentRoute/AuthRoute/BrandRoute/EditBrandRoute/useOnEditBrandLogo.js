import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogButton from 'shared-lib/button/DialogButton';
import useForm from 'shared-lib/hook/useForm';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import useUpdateBrandLogo from 'firebase-wrapper/firestore/useUpdateBrandLogo';
import ImageSelector from 'shared-lib/form-item/ImageSelector';

const EditBrandLogoDialog = ({ brand }) => {
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const updateBrandLogo = useUpdateBrandLogo();
  const { form, onSubmit, disabled } = useForm({
    logo: []
  }, ({ logo }) => {
    return updateBrandLogo(brand.value, logo[0])
      .then(() => {
        updateDialog(<MessageDialog message={`${brand.label} is updated.`} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return <div>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <ImageSelector {...form('logo')} label={`Brand's logo`} multiple={false} />
      </Fieldset>
      <DialogButtonLayout>
        <DialogButton type='button' disabled={disabled} onClick={dismissDialog}>dismiss</DialogButton>
        <DialogButton type='submit' disabled={disabled} loading={disabled}>submit</DialogButton>
      </DialogButtonLayout>
    </Form>
  </div>;
};


const useOnEditBrandLogo = (brand) => {
  const addDialog = useAddDialog();
  return React.useCallback(e => {
    addDialog(<EditBrandLogoDialog brand={brand} />);
  }, [addDialog, brand]);
};

export default useOnEditBrandLogo;