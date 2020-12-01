import React from 'react';
import { useSetState } from 'redux-wrapper/action';

const useDecrementFromCart = (index) => {
  const setState = useSetState();
  return React.useCallback(() => {
    setState(pre => {
      const newCart = [...pre.cart];
      newCart[index].amount--;
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...pre,
        cart: newCart
      };
    });
  }, [index, setState]);
};

export default useDecrementFromCart;