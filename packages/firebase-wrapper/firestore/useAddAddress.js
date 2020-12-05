import React from 'react';
import { fs, serverTimestamp } from '..';

const useAddAddress = (uid) => {
  return React.useCallback(address => {
    return fs.collection('users').doc(uid).collection('addresses').add({
      ...address,
      timestamp: serverTimestamp
    });
  }, [uid]);
};

export default useAddAddress;