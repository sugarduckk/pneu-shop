import React from 'react';
import { fs, serverTimestamp } from '..';

const useSetEmailVerificationTimestamp = (uid) => {
  return React.useCallback(() => {
    return fs.collection('users').doc(uid).set({
      verifyEmailSent: serverTimestamp
    }, {
      merge: true
    });
  }, [uid]);
};

export default useSetEmailVerificationTimestamp;