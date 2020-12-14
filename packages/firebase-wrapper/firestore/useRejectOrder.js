import React from 'react'
import OrderStatus from 'shared-lib/constant/OrderStatus'
import { fs, increment } from '..'

const useRejectOrder = (uid, orderId) => {
  return React.useCallback((reason) => {
    const userRef = fs.collection('users').doc(uid)
    const orderRef = userRef.collection('orders').doc(orderId);
    return fs.runTransaction(transaction => {
      return transaction.get(orderRef)
        .then(doc => {
          if (!doc.exists) {
            throw Error('Order does not exist!')
          }
          const order = doc.data()
          if (order.status !== OrderStatus.PENDING_REVIEW) {
            throw Error(`Order's status is not PENDING_REVIEW.`)
          }
          transaction.set(orderRef, {
            status: OrderStatus.REJECTED,
            rejectedReason: reason
          }, {
            merge: true
          })
          transaction.update(userRef, {
            nPendingReviewOrders: increment(-1),
            nRejectedOrders: increment(1)
          })
        })
    })
  }, [orderId, uid])
}

export default useRejectOrder