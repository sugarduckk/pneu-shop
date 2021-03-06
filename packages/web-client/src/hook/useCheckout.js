import React from 'react';
import { useDismissDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import ClientRoutes from '../constant/ClientRoutes';
import useGoto from './useGoto';

const useCheckout = () => {
  const { user } = useGlobalState();
  const gotoLogin = useGoto(ClientRoutes.LOGIN);
  const gotoCheckout = useGoto(ClientRoutes.CHECKOUT);
  const dismissDialog = useDismissDialog();
  const onConfirm = React.useCallback(() => {
    gotoLogin();
    dismissDialog();
    return null
  }, [gotoLogin, dismissDialog]);
  const showConfirmDialog = useShowConfirmDialog(onConfirm, true);
  return React.useCallback(() => {
    if (!user) {
      showConfirmDialog({
        message: 'Please login'
      });
    }
    else {
      gotoCheckout();
      dismissDialog()
    }
  }, [dismissDialog, showConfirmDialog, user, gotoCheckout]);
};

export default useCheckout;