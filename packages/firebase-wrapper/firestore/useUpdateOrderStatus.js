import React from 'react';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import { fs, increment, serverTimestamp } from '..';

const useUpdateOrderStatus = (uid, orderId, currentStatus, newStatus) => {
  const userRef = fs.collection('users').doc(uid)
  const orderRef = userRef.collection('orders').doc(orderId);
  const historyRef = orderRef.collection('history')
  return React.useCallback(() => {
    return fs.runTransaction(transaction => {
      return transaction.get(orderRef).then(docRef => {
        if (!docRef.exists) {
          throw "Order does not exist!";
        }
        const order = docRef.data()
        if (order.status !== currentStatus) {
          throw `Order does not have status ${currentStatus}`;
        }
        transaction.update(orderRef, {
          status: newStatus
        });
        transaction.set(historyRef.doc(), {
          status: newStatus,
          timestamp: serverTimestamp
        })
        transaction.update(userRef, {
          [OrderStatus[currentStatus].count]: increment(-1),
          [OrderStatus[newStatus].count]: increment(1)
        })
      });
    });
  }, [currentStatus, newStatus, orderRef, userRef, historyRef]);
};

export default useUpdateOrderStatus;