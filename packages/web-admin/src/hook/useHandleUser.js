import React from 'react';
import { useDispatch } from 'react-redux';
import { setState } from 'shared-lib/redux/action';

const useHandleUser = () => {
  const dispatch = useDispatch();
  return React.useCallback(user => {
    dispatch(setState({
      user,
      userLoaded: true
    }));
  }, [dispatch]);
};

export default useHandleUser;