import React from 'react';
import { useSetState } from 'redux-wrapper/action';
import useShowCart from './useShowCart';

const useAddToCart = productId => {
  const setState = useSetState();
  const showCart = useShowCart();
  return React.useCallback(() => {
    setState(pre => {
      const preCart = pre.cart || [];
      const index = preCart.findIndex(p => p.productId === productId);
      var temp;
      if (index >= 0) {
        const newCart = [...preCart];
        newCart[index].amount++;
        localStorage.setItem('cart', JSON.stringify(newCart));
        return {
          ...pre,
          cart: newCart
        };
      }
      const newCart = [
        ...preCart,
        {
          productId,
          amount: 1
        }
      ];
      temp = {
        ...pre,
        cart: newCart
      };
      localStorage.setItem('cart', JSON.stringify(newCart));
      return temp;
    });
    showCart();
  }, [productId, setState, showCart]);
};

export default useAddToCart;