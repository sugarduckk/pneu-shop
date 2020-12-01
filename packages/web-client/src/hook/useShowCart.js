import React from 'react';
import { useSetState } from 'redux-wrapper/action';

const useShowCart = () => {
  const setState = useSetState();
  return React.useCallback(() => {
    setState(pre => {
      return {
        ...pre,
        showCart: true
      };
    });
  }, [setState]);
};

export default useShowCart;