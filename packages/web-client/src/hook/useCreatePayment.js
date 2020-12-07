import useSubmitOrder from 'firebase-wrapper/firestore/useSubmitOrder';
import React from 'react';
import { useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import ClientRoutes from '../constant/ClientRoutes';
import useGoto from './useGoto';

const useCreatePayment = () => {
  const { user, cart } = useGlobalState();
  const updateDialog = useUpdateDialog();
  const submitOrder = useSubmitOrder(user.uid, cart);
  const gotoOrder = useGoto(ClientRoutes.ORDER);
  const uploadOrder = useShowConfirmDialog(payload => {
    return submitOrder(payload)
      .then(() => {
        gotoOrder();
        localStorage.removeItem('cart');
        updateDialog(<MessageDialog message='Order Updated !' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return React.useCallback(values => {
    uploadOrder({
      message: 'Submit order ?',
      payload: values
    });
  }, [uploadOrder]);
};

export default useCreatePayment;