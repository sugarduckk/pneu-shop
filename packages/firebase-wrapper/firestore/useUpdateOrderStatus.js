import React from 'react';
import { fs, increment } from '..';
import OrderStatus from 'shared-lib/constant/OrderStatus';

const useUpdateOrderStatus = (uid, orderId, currentStatus, newStatus) => {
  const userRef = fs.collection('users').doc(uid)
  const orderRef = userRef.collection('orders').doc(orderId);
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
        if (currentStatus === OrderStatus.PENDING_REVIEW && newStatus === OrderStatus.DELETED) {
          transaction.update(userRef, {
            nPendingReviewOrders: increment(-1),
            nDeletedOrders: increment(1)
          })
        }
        else if (currentStatus === OrderStatus.PENDING_REVIEW && newStatus === OrderStatus.ACCEPTED) {
          transaction.update(userRef, {
            nPendingReviewOrders: increment(-1),
            nAcceptedOrders: increment(1)
          })
        }
        else if (currentStatus === OrderStatus.ACCEPTED && newStatus === OrderStatus.DELIVERED) {
          transaction.update(userRef, {
            nAcceptedOrders: increment(-1),
            nDeliveredOrders: increment(1)
          })
        }
        else if (currentStatus === OrderStatus.DELIVERED && newStatus === OrderStatus.COMPLETED) {
          transaction.update(userRef, {
            nDeliveredOrders: increment(-1),
            nCompletedOrders: increment(1)
          })
        }
        else if (currentStatus === OrderStatus.REJECTED && newStatus === OrderStatus.DELETED) {
          transaction.update(userRef, {
            nRejectedOrders: increment(-1),
            nDeletedOrders: increment(1)
          })
        }
      });
    });
  }, [currentStatus, newStatus, orderRef, userRef]);
};

export default useUpdateOrderStatus;