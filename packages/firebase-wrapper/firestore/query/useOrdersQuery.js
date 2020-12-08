import React from 'react';
import { fs } from '../..';

const useOrdersQuery = (uid, orderStatus) => {
  return React.useMemo(() => {
    return fs.collection('users').doc(uid).collection('orders').where('status', '==', orderStatus).orderBy('timestamp', 'desc');
  }, [uid, orderStatus]);
};

export default useOrdersQuery;