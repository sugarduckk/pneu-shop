import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';

const useBrand = (product) => {
  const { brands } = useGlobalState();
  return React.useMemo(() => {
    if (product) {
      return brands.find(c => c.value === product.brand);
    }
  }, [brands, product]);
};

export default useBrand;