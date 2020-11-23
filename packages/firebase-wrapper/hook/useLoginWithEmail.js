import React from 'react';
import { auth } from '..';

const useLoginWithEmail = (handleError) => {
  return React.useCallback(values => {
    return auth.signInWithEmailAndPassword(values.email, values.password)
      .catch(error => {
        handleError(error, values.email);
      });
  }, [handleError]);
};

export default useLoginWithEmail;