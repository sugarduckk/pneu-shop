import React from 'react';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import { fs, increment, serverTimestamp } from '..';

const useApplyRefund = (uid, orderId) => {
  const userRef = fs.collection('users').doc(uid);
  const orderRef = userRef.collection('orders').doc(orderId);
  const historyRef = orderRef.collection('history');
  return React.useCallback((refundDetail) => {
    return fs.runTransaction(transaction => {
      return transaction.get(orderRef).then(docRef => {
        if (!docRef.exists) {
          throw "Order does not exist!";
        }
        const order = docRef.data();
        if (order.status !== OrderStatus.REJECTED.value) {
          throw `Order is not rejected.`;
        }
        transaction.set(orderRef, {
          status: OrderStatus.PENDING_REFUND.value,
          refundDetail
        }, {
          merge: true
        });
        transaction.set(historyRef.doc(), {
          status: OrderStatus.PENDING_REFUND.value,
          timestamp: serverTimestamp
        });
        transaction.update(userRef, {
          [OrderStatus[OrderStatus.REJECTED.value].count]: increment(-1),
          [OrderStatus[OrderStatus.PENDING_REFUND.value].count]: increment(1)
        });
      });
    });
  }, [orderRef, userRef, historyRef]);
};

export default useApplyRefund;