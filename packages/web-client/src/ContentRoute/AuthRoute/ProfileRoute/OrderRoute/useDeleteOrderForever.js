import useDeleteOrder from 'firebase-wrapper/firestore/useDeleteOrder';
import useUpdateOrderStatus from 'firebase-wrapper/firestore/useUpdateOrderStatus';
import React from 'react';
import { useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import OrderStatus from '../../../../constant/OrderStatus';

const useDeleteOrderForever = (orderId) => {
  const updateDialog = useUpdateDialog();
  const { user } = useGlobalState();
  const deleteOrder = useDeleteOrder(user.uid, orderId);
  const onConfirm = React.useCallback(() => {
    deleteOrder()
      .then(() => {
        updateDialog(<MessageDialog message='Deleted forever' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [updateDialog, deleteOrder]);
  const showConfirm = useShowConfirmDialog(onConfirm);
  return React.useCallback(() => {
    showConfirm({
      message: 'Are you sure to delete this order forever?'
    });
  }, [showConfirm]);
};

export default useDeleteOrderForever;