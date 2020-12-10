import useUpdateOrderStatus from 'firebase-wrapper/firestore/useUpdateOrderStatus';
import React from 'react';
import { useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import OrderStatus from '../../../constant/OrderStatus';

const useDeletePendingReviewOrder = (orderId) => {
  const updateDialog = useUpdateDialog();
  const { user } = useGlobalState();
  const updatePendingReviewToDeleted = useUpdateOrderStatus(user.uid, orderId, OrderStatus.PENDING_REVIEW, OrderStatus.DELETED);
  const onConfirm = React.useCallback(() => {
    updatePendingReviewToDeleted()
      .then(() => {
        updateDialog(<MessageDialog message='Deleted' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [updateDialog, updatePendingReviewToDeleted]);
  const showConfirm = useShowConfirmDialog(onConfirm);
  return React.useCallback(() => {
    showConfirm({
      message: 'Are you sure to delete this order?'
    });
  }, [showConfirm]);
};

export default useDeletePendingReviewOrder;