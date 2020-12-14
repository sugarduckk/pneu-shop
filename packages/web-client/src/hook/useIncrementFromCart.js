import React from 'react';
import { useSetState } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';

const useIncrementFromCart = (index, max) => {
  const setState = useSetState();
  const { cart } = useGlobalState()
  const showMessage = useShowMessageDialog()
  return React.useCallback(() => {
    if (cart[index].amount === max) {
      showMessage('Not enough amount in the stock, please contact us directly to pre-order.')
    }
    else {
      setState(pre => {
        const newCart = [...pre.cart];
        newCart[index].amount++;
        localStorage.setItem('cart', JSON.stringify(newCart));
        return {
          ...pre,
          cart: newCart
        };
      });
    }

  }, [index, setState, max, cart, showMessage]);
};

export default useIncrementFromCart;