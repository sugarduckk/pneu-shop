import React from 'react';
import { fs } from '../..';

const useOrdersQuery = (uid) => {
  return React.useMemo(() => {
    return fs.collection('users').doc(uid).collection('orders').orderBy('timestamp', 'desc');
  }, [uid]);
};

export default useOrdersQuery;