import React from 'react';
import { fs } from '..';

const useUpdateBrand = () => {
  return React.useCallback(brand => {
    return fs.collection('brands').doc(brand.value).update(brand);
  }, []);
};

export default useUpdateBrand;