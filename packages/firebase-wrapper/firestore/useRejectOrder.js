import React from 'react';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import { fs, increment, serverTimestamp } from '..';

const useRejectOrder = (uid, orderId) => {
  return React.useCallback((reason) => {
    const userRef = fs.collection('users').doc(uid);
    const orderRef = userRef.collection('orders').doc(orderId);
    const historyRef = userRef.collection('orders').doc(orderId).collection('history');
    return fs.runTransaction(transaction => {
      return transaction.get(orderRef)
        .then(doc => {
          if (!doc.exists) {
            throw Error(`Order [${orderId}] does not exist! Cannot reject.`);
          }
          const order = doc.data();
          if (order.status !== OrderStatus.PENDING_REVIEW.value) {
            throw Error(`Order's status is not PENDING_REVIEW.`);
          }
          transaction.set(orderRef, {
            status: OrderStatus.REJECTED.value,
            rejectedReason: reason
          }, {
            merge: true
          });
          transaction.set(historyRef.doc(), {
            status: OrderStatus.REJECTED.value,
            timestamp: serverTimestamp
          });
          order.cart.forEach(product => {
            transaction.update(fs.collection('products').doc(product.productId), {
              in_stock: increment(product.quantity)
            });
          });
          transaction.update(userRef, {
            [OrderStatus.PENDING_REVIEW.count]: increment(-1),
            [OrderStatus.REJECTED.count]: increment(1)
          });
        });
    });
  }, [orderId, uid]);
};

export default useRejectOrder;