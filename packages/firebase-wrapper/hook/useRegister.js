import React from 'react';
import { auth } from '..';

const useRegister = (onError) => {
  return React.useCallback(values => {
    return auth.createUserWithEmailAndPassword(values.email, values.password)
      .catch(onError);
  }, [onError]);
};

export default useRegister;