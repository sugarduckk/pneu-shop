import React from 'react';
import { useAddDialog } from 'redux-wrapper/action';
import MenuRoute from '../MenuRoute';

const useShowMenuDialog = () => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<MenuRoute />);
  }, [addDialog]);
};

export default useShowMenuDialog;