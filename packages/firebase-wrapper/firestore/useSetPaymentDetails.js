import React from 'react';
const { fs } = require("..");

const useSetPaymentDetails = () => {
  return React.useCallback(paymentDetails => {
    return fs.collection('config').doc('paymentDetails').set(paymentDetails, {
      merge: true
    });
  }, []);
};

export default useSetPaymentDetails;