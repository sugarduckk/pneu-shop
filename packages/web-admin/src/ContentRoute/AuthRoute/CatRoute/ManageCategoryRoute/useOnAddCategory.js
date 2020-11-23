import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import TextInput from 'shared-lib/form-item/TextInput';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogButton from 'shared-lib/button/DialogButton';
import useAddCategory from 'firebase-wrapper/firestore/useAddCategory';
import useForm from 'shared-lib/hook/useForm';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import ImageSelector from 'shared-lib/form-item/ImageSelector';

const AddCategoryDialog = props => {
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const addCategory = useAddCategory();
  const { form, onSubmit, disabled } = useForm({
    label: '',
    files: []
  }, ({ label, files }) => {
    const labelArray = label.trim().split(/\s+/).map(s => s.trim());
    const cleanLabel = labelArray.map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(' ');
    const cleanValue = labelArray.map(s => s.toLowerCase()).join('_');
    return addCategory({
      value: cleanValue,
      label: cleanLabel,
      files
    })
      .then(() => {
        updateDialog(<MessageDialog message={`${cleanLabel} is added.`} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return <div>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('label')} label={`Category's name`} />
        <ImageSelector {...form('files')} label={`Category's images`} multiple={true} />
      </Fieldset>
      <DialogButtonLayout>
        <DialogButton type='button' disabled={disabled} onClick={dismissDialog}>dismiss</DialogButton>
        <DialogButton type='submit' disabled={disabled} loading={disabled}>submit</DialogButton>
      </DialogButtonLayout>
    </Form>
  </div>;
};


const useOnAddCategory = () => {
  const addDialog = useAddDialog();
  return React.useCallback(e => {
    addDialog(<AddCategoryDialog />);
  }, [addDialog]);
};

export default useOnAddCategory;