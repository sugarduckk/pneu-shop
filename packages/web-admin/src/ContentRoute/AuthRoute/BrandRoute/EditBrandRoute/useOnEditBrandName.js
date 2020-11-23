import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import TextInput from 'shared-lib/form-item/TextInput';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogButton from 'shared-lib/button/DialogButton';
import useForm from 'shared-lib/hook/useForm';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import useUpdateBrand from 'firebase-wrapper/firestore/useUpdateBrand';

const EditBrandNameDialog = ({ brand }) => {
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const updateBrand = useUpdateBrand();
  const { form, onSubmit, disabled } = useForm({
    label: brand.label
  }, ({ label }) => {
    const cleanLabel = label.trim().split(/\s+/).map(s => s.trim()).join(' ');
    return updateBrand({
      value: brand.value,
      label: cleanLabel
    })
      .then(() => {
        updateDialog(<MessageDialog message={`${cleanLabel} is updated.`} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return <div>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('label')} label={`Brand's name`} />
      </Fieldset>
      <DialogButtonLayout>
        <DialogButton type='button' disabled={disabled} onClick={dismissDialog}>dismiss</DialogButton>
        <DialogButton type='submit' disabled={disabled} loading={disabled}>submit</DialogButton>
      </DialogButtonLayout>
    </Form>
  </div>;
};


const useOnEditBrandName = (brand) => {
  const addDialog = useAddDialog();
  return React.useCallback(e => {
    addDialog(<EditBrandNameDialog brand={brand} />);
  }, [addDialog, brand]);
};

export default useOnEditBrandName;