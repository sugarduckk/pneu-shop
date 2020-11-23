import React from 'react';
import { auth } from '..';

const useSignInMethod = () => {
  return React.useCallback(email => {
    return auth.fetchSignInMethodsForEmail(email);
  }, []);
};

export default useSignInMethod;