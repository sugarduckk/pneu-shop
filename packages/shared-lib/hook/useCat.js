import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';

const useCat = (product) => {
  const { cats } = useGlobalState();
  return React.useMemo(() => {
    if (product) {
      return cats.find(c => c.value === product.category);
    }
  }, [cats, product]);
};

export default useCat;