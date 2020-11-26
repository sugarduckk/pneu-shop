import React from 'react';
import { fs } from '..';

const useDeleteCat = () => {
  return React.useCallback(catId => {
    const catRef = fs.collection('cats').doc(catId);
    return fs.runTransaction(async transaction => {
      const catDoc = await transaction.get(catRef);
      if (catDoc.exists && catDoc.data().amount > 0) {
        throw Error('Please delete all products under this category.');
      }
      transaction.delete(catRef);
    });
  }, []);
};

export default useDeleteCat;