import React from 'react';
import { fs } from '..';
import OrderStatus from '../../web-client/src/constant/OrderStatus';

const useDeleteOrder = (uid, orderId) => {
  return React.useCallback(() => {
    const orderRef = fs.collection('users').doc(uid).collection('orders').doc(orderId);
    return fs.runTransaction(transaction => {
      return transaction.get(orderRef)
        .then(docRef => {
          if (!docRef.exists) {
            throw Error('Order does not exist !');
          }
          if (docRef.data().status !== OrderStatus.DELETED) {
            throw Error('Order is not deleted !');
          }
          else {
            transaction.delete(orderRef);
          }
        });
    });
  }, [orderId, uid]);
};

export default useDeleteOrder;