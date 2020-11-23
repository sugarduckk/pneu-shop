import React from 'react';
import { useUpdateDialog } from 'redux-wrapper/action';
import useDeleteProduct from 'firebase-wrapper/firestore/useDeleteProduct';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';

const useOnDeleteProduct = (productId) => {
  const updateDialog = useUpdateDialog();
  const deleteProduct = useDeleteProduct(productId);
  const showDeleteConfirm = useShowConfirmDialog(payload => {
    return deleteProduct(payload.productId)
      .then(() => {
        updateDialog(<MessageDialog message={`${productId} is now deleted.`} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return React.useCallback(e => {
    showDeleteConfirm({
      message: `Are you sure to delete ${productId}?`,
      payload: {
        productId
      }
    });
  }, [showDeleteConfirm, productId]);
};

export default useOnDeleteProduct;