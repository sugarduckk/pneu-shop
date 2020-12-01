import React from 'react';
import { useSetState } from 'redux-wrapper/action';

const useSetCartAmount = (index) => {
  const setState = useSetState();
  return React.useCallback((e) => {
    setState(pre => {
      const newCart = [...pre.cart];
      newCart[index].amount = parseInt(e.target.value || 0);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...pre,
        cart: newCart
      };
    });
  }, [index, setState]);
};

export default useSetCartAmount;