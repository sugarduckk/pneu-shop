import React from 'react';
import { useSetState } from 'redux-wrapper/action';

const useHandleUser = () => {
  const setState = useSetState();
  return React.useCallback(user => {
    setState({
      user,
      userLoaded: true
    });
  }, [setState]);
};

export default useHandleUser;