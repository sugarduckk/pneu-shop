import React from 'react';
import { useSetState } from 'redux-wrapper/action';

const useHideCart = () => {
  const setState = useSetState();
  return React.useCallback(() => {
    setState(pre => {
      return {
        ...pre,
        showCart: false
      };
    });
  }, [setState]);
};

export default useHideCart;