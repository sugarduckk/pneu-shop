import useSubmitOrder from 'firebase-wrapper/firestore/useSubmitOrder';
import React from 'react';
import { useDeleteState, useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';
import ClientRoutes from '../constant/ClientRoutes';
import INTOWNS from '../constant/INTOWNS';
import useGoto from './useGoto';

const useCreatePayment = (deliveryFees) => {
  const { user } = useGlobalState();
  const deleteState = useDeleteState();
  const updateDialog = useUpdateDialog();
  const submitOrder = useSubmitOrder(user.uid);
  const gotoOrder = useGoto(ClientRoutes.ORDER_PENDING_REVIEW);
  const uploadOrder = useShowConfirmDialog(payload => {
    const isIntown = INTOWNS.includes(payload.address.province);
    return submitOrder({
      ...payload,
      deliveryFee: isIntown ? deliveryFees.intown : deliveryFees.upcountry
    })
      .then(() => {
        localStorage.removeItem('cart');
        deleteState('cart');
        gotoOrder();
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