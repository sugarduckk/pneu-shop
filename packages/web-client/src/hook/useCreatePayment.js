import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';

const useCreatePayment = () => {
  const { user } = useGlobalState();
  return React.useCallback(amount => {
    const data = {
      applicationKey: 'l7a63b72ce6cd243b28af22fabc6910b2c',
      applicationSecret: '4aa709a06744402f8847cca333656e3e',
    };
    return fetch('https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'resourceOwnerId': 'l7a63b72ce6cd243b28af22fabc6910b2c',
        'requestUId': '123456'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        if (result.status.code === 1000) {
          const token = result.data.accessToken;
          const qrData = {
            qrType: 'PPCS',
            amount,
            invoice: 'INVOICE001',
            merchantId: '458539499616155',
            terminalId: '806334982971627',
            ppType: 'BILLERID',
            ppId: '932047287217398',
            ref1: 'REFERENCE001',
            ref2: 'REFERENCE002',
            ref3: `IQB123456`
          };
          return fetch('https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              'authorization': `Bearer ${token}`,
              'resourceOwnerId': 'l7a63b72ce6cd243b28af22fabc6910b2c',
              'requestUId': '123456'
            },
            body: JSON.stringify(qrData)
          });
        }
        else {
          console.log(result);
          throw Error('SCB authetication error');
        }
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
};

export default useCreatePayment;