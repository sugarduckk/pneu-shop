import React from 'react';
import { useSetState } from 'redux-wrapper/action';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';

const useSetCartAmount = (index, max) => {
  const setState = useSetState();
  const showMessage = useShowMessageDialog()
  return React.useCallback((e) => {
    var newAmount;
    if (e.target.value) {
      newAmount = parseInt(e.target.value);
      if (newAmount < 1) {
        newAmount = 1
      }
      else if (newAmount > max) {
        showMessage('Not enough amount in the stock, please contact us directly to pre-order.')
        newAmount = max
      }
    }
    else {
      newAmount = 1
    }
    setState(pre => {
      const newCart = [...pre.cart];
      newCart[index].amount = newAmount
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...pre,
        cart: newCart
      };
    });

  }, [index, setState, max, showMessage]);
};

export default useSetCartAmount;