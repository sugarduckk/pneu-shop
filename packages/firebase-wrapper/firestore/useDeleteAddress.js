import React from 'react';
import { fs } from '..';

const useDeleteAddress = (uid, addressId) => {
  return React.useCallback(() => {
    return fs.collection('users').doc(uid).collection('addresses').doc(addressId).delete();
  }, [uid, addressId]);
};

export default useDeleteAddress;