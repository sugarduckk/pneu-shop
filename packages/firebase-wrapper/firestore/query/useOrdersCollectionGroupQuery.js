import React from 'react';
import { fs } from '../..';

const useOrdersCollectionGroupQuery = (orderStatus) => {
  return React.useMemo(() => {
    return fs.collectionGroup('orders').where('status', '==', orderStatus).orderBy('timestamp', 'asc');
  }, [orderStatus]);
};

export default useOrdersCollectionGroupQuery;