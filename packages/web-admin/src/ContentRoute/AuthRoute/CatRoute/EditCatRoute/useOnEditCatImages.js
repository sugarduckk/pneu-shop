import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogButton from 'shared-lib/button/DialogButton';
import useForm from 'shared-lib/hook/useForm';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import ImageSelector from 'shared-lib/form-item/ImageSelector';
import useUpdateCatImages from 'firebase-wrapper/firestore/useUpdateCatImages';

const EditCatImagesDialog = ({ cat }) => {
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const updateCatImages = useUpdateCatImages();
  const { form, onSubmit, disabled } = useForm({
    images: []
  }, ({ images }) => {
    return updateCatImages(cat.value, images, cat.images)
      .then(() => {
        updateDialog(<MessageDialog message={`${cat.label} is updated.`} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return <div>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <ImageSelector {...form('images')} label={`Category's images`} multiple={true} />
      </Fieldset>
      <DialogButtonLayout>
        <DialogButton type='button' disabled={disabled} onClick={dismissDialog}>dismiss</DialogButton>
        <DialogButton type='submit' disabled={disabled} loading={disabled}>submit</DialogButton>
      </DialogButtonLayout>
    </Form>
  </div>;
};


const useOnEditCatImages = (cat) => {
  const addDialog = useAddDialog();
  return React.useCallback(e => {
    addDialog(<EditCatImagesDialog cat={cat} />);
  }, [addDialog, cat]);
};

export default useOnEditCatImages;