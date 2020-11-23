import React from 'react';
import { useHistory } from 'react-router-dom';

const useGoBack = () => {
  const history = useHistory();
  return React.useCallback(() => {
    history.goBack();
  }, [history]);
};

export default useGoBack;