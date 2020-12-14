import React from 'react';
import { fs } from '../..';

const useOrdersArrayQuery = (uid, array) => {
  return React.useMemo(() => {
    return fs.collection('users').doc(uid).collection('orders').where('status', 'in', array).orderBy('timestamp', 'desc');
  }, [uid, array]);
};

export default useOrdersArrayQuery;