import React from 'react';
import { fs } from '..';

const useUpdateOrderStatus = (uid, orderId, currentStatus, newStatus) => {
  const orderRef = fs.collection('users').doc(uid).collection('orders').doc(orderId);
  return React.useCallback(() => {
    return fs.runTransaction(transaction => {
      return transaction.get(orderRef).then(docRef => {
        if (!docRef.exists) {
          throw "Order does not exist!";
        }
        if (docRef.data().status !== currentStatus) {
          throw `Order does not have status ${currentStatus}`;
        }
        transaction.update(orderRef, {
          status: newStatus
        });
      });
    });
  }, [currentStatus, newStatus, orderRef]);
};

export default useUpdateOrderStatus;