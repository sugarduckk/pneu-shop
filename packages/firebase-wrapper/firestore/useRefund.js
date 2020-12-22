import React from 'react'
import OrderStatus from 'shared-lib/constant/OrderStatus'
import resizeImage from 'shared-lib/util/resizeImage'
import sourceToImage from 'shared-lib/util/sourceToImage'
import { fs, storage, increment, serverTimestamp } from '..'

const useRefund = (uid, orderId) => {
  return React.useCallback(refundSlips => {
    const userRef = fs.collection('users').doc(uid)
    const orderRef = userRef.collection('orders').doc(orderId);
    const historyRef = orderRef.collection('history')
    const refundStorageRef = storage.ref(`refund/${orderId}`);
    return Promise.all(refundSlips.map(file => {
      return sourceToImage(file.src);
    }))
      .then(imgs => {
        const resizedImages = imgs.map(image => resizeImage(image, 1080, 1080, 0.7));
        return Promise.all(resizedImages.map((resizedImage, index) => {
          return refundStorageRef.child(refundSlips[index].name).putString(resizedImage, 'data_url');
        }))
      })
      .then(snapshots => {
        const downloadUrlPromises = [];
        snapshots.forEach((snapshot) => {
          downloadUrlPromises.push(snapshot.ref.getDownloadURL());
        });
        return Promise.all(downloadUrlPromises)
      })
      .then(downloadUrls => {
        const uploadedRefundSlips = downloadUrls.map((src, srcIndex) => {
          return {
            src,
            name: refundSlips[srcIndex].name
          };
        })
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
                refundSlips: uploadedRefundSlips
              }, {
                merge: true
              })
              transaction.update(orderRef, {
                status: OrderStatus.REFUNDED.value
              })
              transaction.set(historyRef.doc(), {
                status: OrderStatus.REFUNDED.value,
                timestamp: serverTimestamp
              })
              transaction.update(userRef, {
                [OrderStatus.PENDING_REFUND.count]: increment(-1),
                [OrderStatus.REFUNDED.count]: increment(1)
              })
            })
        })
      })
  }, [orderId, uid])
}

export default useRefund