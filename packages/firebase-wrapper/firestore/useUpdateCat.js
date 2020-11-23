import React from 'react';
import { fs } from '..';

const useUpdateCat = () => {
  return React.useCallback(cat => {
    return fs.collection('cats').doc(cat.value).update(cat);
  }, []);
};

export default useUpdateCat;