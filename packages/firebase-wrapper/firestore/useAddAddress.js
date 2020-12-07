import React from 'react';
import { fs, serverTimestamp } from '..';

const useAddAddress = (uid) => {
  return React.useCallback(address => {
    const docRef = fs.collection('users').doc(uid).collection('addresses').doc();
    return docRef.set({
      ...address,
      timestamp: serverTimestamp,
      id: docRef.id
    });
  }, [uid]);
};

export default useAddAddress;