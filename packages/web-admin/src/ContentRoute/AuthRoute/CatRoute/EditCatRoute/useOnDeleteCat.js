import useDeleteCat from 'firebase-wrapper/firestore/useDeleteCat';
import React from 'react';
import { useUpdateDialog } from 'redux-wrapper/action';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';

const useOnDeleteCat = (catId) => {
  const updateDialog = useUpdateDialog();
  const deleteCat = useDeleteCat();
  const showConfirm = useShowConfirmDialog(() => {
    deleteCat(catId)
      .then(() => {
        updateDialog(<MessageDialog message={'Successfully deleted !'} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return React.useCallback(() => {
    showConfirm({
      message: 'Are you sure to delete this category?'
    });
  }, [showConfirm]);
};

export default useOnDeleteCat;