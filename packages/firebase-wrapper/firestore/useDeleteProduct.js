import React from 'react';
import { fs } from '..';

const useDeleteProduct = () => {
  return React.useCallback(productId => {
    return fs.collection('products').doc(productId).delete();
  }, []);
};

export default useDeleteProduct;