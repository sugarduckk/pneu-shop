import React from 'react';
import { fs } from '..';

const useProduct = (productId) => {
  const [product, setProduct] = React.useState();
  React.useEffect(() => {
    return fs.collection('products').doc(productId).onSnapshot(snap => {
      if (snap.exists) {
        setProduct(snap.data());
      }
      else {
        setProduct(null);
      }
    });
  }, [productId]);
  return product;
};

export default useProduct;