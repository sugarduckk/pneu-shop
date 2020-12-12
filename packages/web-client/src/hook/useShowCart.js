import React from 'react';
import { useAddDialog } from 'redux-wrapper/action';
import ShoppingCartDialog from '../Component/ShoppingCartDialog';

const useShowCart = () => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<ShoppingCartDialog />)
  }, [addDialog]);
};

export default useShowCart;