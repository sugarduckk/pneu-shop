import React from 'react';
const { fs } = require("..");

const useSetDeliveryPrice = () => {
  return React.useCallback(data => {
    return fs.collection('config').doc('delivery').set(data, {
      merge: true
    });
  }, []);
};

export default useSetDeliveryPrice;