import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';

const useDeliveryPrice = (key) => {
  const { config } = useGlobalState();
  return React.useMemo(() => {
    if (!config || !config.delivery || !config.delivery[key]) {
      return false;
    }
    else {
      const values = config.delivery[key].map(({ threshold, price }) => {
        return [threshold, price];
      });
      return [
        ['Threshold', 'Price'],
        ...values
      ];
    }
  }, [config, key]);
};

export default useDeliveryPrice;