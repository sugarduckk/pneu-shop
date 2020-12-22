import React from 'react'
import OrderStatus from 'shared-lib/constant/OrderStatus'
import { fs, increment, serverTimestamp } from '..'

const useRejectRefund = (uid, orderId) => {
  return React.useCallback((reason) => {
    const userRef = fs.collection('users').doc(uid)
    const orderRef = userRef.collection('orders').doc(orderId);
    const historyRef = orderRef.collection('history')
    return fs.runTransaction(transaction => {
      return transaction.get(orderRef)
        .then(doc => {
          if (!doc.exists) {
            throw Error('Order does not exist!')
          }
          const order = doc.data()
          if (order.status !== OrderStatus.PENDING_REFUND.value) {
            throw Error(`Order's status is not PENDING_REFUND.`)
          }
          transaction.set(orderRef, {
            refundRejectedReason: reason
          }, {
            merge: true
          })
          transaction.update(orderRef, {
            status: OrderStatus.REFUND_REJECTED.value
          })
          transaction.set(historyRef.doc(), {
            status: OrderStatus.REFUND_REJECTED.value,
            timestamp: serverTimestamp
          })
          transaction.update(userRef, {
            [OrderStatus.PENDING_REFUND.count]: increment(-1),
            [OrderStatus.REFUND_REJECTED.count]: increment(1)
          })
        })
    })
  }, [orderId, uid])
}

export default useRejectRefund