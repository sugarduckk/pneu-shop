import React from 'react';
import { fs } from '..';

const useAddBulkItem = () => {
  return React.useCallback((docs) => {
    const batch = fs.batch();
    docs.forEach(doc => {
      batch.set(fs.collection('products').doc(doc.id), doc);
    });
    return batch.commit();
  }, []);
};

export default useAddBulkItem;