import React from 'react';
import { useSetState } from 'redux-wrapper/action';

const useDeleteFromCart = (index) => {
  const setState = useSetState();
  return React.useCallback(() => {
    setState(pre => {
      const newCart = [...pre.cart];
      newCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...pre,
        cart: newCart
      };
    });
  }, [index, setState]);
};

export default useDeleteFromCart;