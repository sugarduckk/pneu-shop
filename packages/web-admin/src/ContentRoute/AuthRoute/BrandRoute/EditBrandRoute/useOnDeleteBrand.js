import useDeleteBrand from 'firebase-wrapper/firestore/useDeleteBrand';
import React from 'react';
import { useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';

const useOnDeleteBrand = (brandId) => {
  const updateDialog = useUpdateDialog();
  const deleteBrand = useDeleteBrand();
  const showConfirm = useShowConfirmDialog(() => {
    deleteBrand(brandId)
      .then(() => {
        updateDialog(<MessageDialog message={'Successfully deleted !'} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return React.useCallback(() => {
    showConfirm({
      message: 'Are you sure to delete this brand?'
    });
  }, [showConfirm]);
};

export default useOnDeleteBrand;