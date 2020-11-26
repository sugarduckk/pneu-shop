import React from 'react';
import { fs } from '..';

const useDeleteBrand = () => {
  return React.useCallback(brandId => {
    const brandRef = fs.collection('brands').doc(brandId);
    return fs.runTransaction(async transaction => {
      const brandDoc = await transaction.get(brandRef);
      if (brandDoc.exists && brandDoc.data().amount > 0) {
        throw Error('Please delete all products under this brand.');
      }
      transaction.delete(brandRef);
    });
  }, []);
};

export default useDeleteBrand;