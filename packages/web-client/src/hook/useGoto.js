import React from 'react';
import { useHistory } from 'react-router-dom';

const useGoto = (path, replace = false) => {
  const history = useHistory();
  return React.useCallback(() => {
    if (replace) {
      history.replace(path);
    }
    else {
      history.push(path);
    }
  }, [history, path, replace]);
};

export default useGoto;