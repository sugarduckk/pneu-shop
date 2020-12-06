import React from 'react';
import { useDismissDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import ClientRoutes from '../constant/ClientRoutes';
import useGoto from './useGoto';
import useHideCart from './useHideCart';

const useCheckout = () => {
  const { user } = useGlobalState();
  const hideCart = useHideCart();
  const gotoLogin = useGoto(ClientRoutes.LOGIN);
  const gotoCheckout = useGoto(ClientRoutes.CHECKOUT);
  const dismissDialog = useDismissDialog();
  const onConfirm = React.useCallback(() => {
    gotoLogin();
    dismissDialog();
  }, [gotoLogin, dismissDialog]);
  const showConfirmDialog = useShowConfirmDialog(onConfirm);
  return React.useCallback(() => {
    if (!user) {
      showConfirmDialog({
        message: 'Please login'
      });
      hideCart();
    }
    else {
      gotoCheckout();
      hideCart();
    }
  }, [hideCart, showConfirmDialog, user, gotoCheckout]);
};

export default useCheckout;