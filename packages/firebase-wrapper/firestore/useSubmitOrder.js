import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import generateOrderId from 'shared-lib/util/generateOrderId';
import resizeImage from 'shared-lib/util/resizeImage';
import sourceToImage from 'shared-lib/util/sourceToImage';
import { fs, increment, serverTimestamp, storage } from '..';
import OrderStatus from 'shared-lib/constant/OrderStatus';

const useSubmitOrder = (uid) => {
  const { cart, cartData } = useGlobalState()
  const cartRef = React.useMemo(() => {
    if (cart) {
      return cart.map(item => {
        const { amount, productId } = item
        const prices = cartData[productId].prices
        const priceIndex = prices.length - prices.slice().reverse().findIndex(p => p.threshold <= amount) - 1;
        return {
          productId,
          productName: cartData[productId].name,
          quantity: amount,
          unitPrice: prices[priceIndex].price
        }
      })
    }
    return null
  }, [cart, cartData])
  return React.useCallback(async ({ paymentSlips, ...others }) => {
    const ordersRef = fs.collection('users').doc(uid).collection('orders');
    const orderId = generateOrderId();
    const slipStorageRef = storage.ref(`paymentSlips/${orderId}`);
    const imgs = await Promise.all(paymentSlips.map(file => {
      return sourceToImage(file.src);
    }));
    const resizedImages = imgs.map(image => resizeImage(image, 1080, 1080, 0.7));
    const snapshots = await Promise.all(resizedImages.map((resizedImage, index) => {
      return slipStorageRef.child(paymentSlips[index].name).putString(resizedImage, 'data_url');
    }));
    const downloadUrlPromises = [];
    snapshots.forEach((snapshot) => {
      downloadUrlPromises.push(snapshot.ref.getDownloadURL());
    });
    const downloadUrls = await Promise.all(downloadUrlPromises);
    const batch = fs.batch();
    batch.set(ordersRef.doc(orderId), {
      id: orderId,
      uid,
      cart: cartRef,
      ...others,
      paymentSlips: downloadUrls.map((src, srcIndex) => {
        return {
          src,
          name: paymentSlips[srcIndex].name
        };
      }),
      timestamp: serverTimestamp,
      status: OrderStatus.PENDING_REVIEW
    });
    batch.update(fs.collection('users').doc(uid), {
      nPendingReviewOrders: increment(1)
    });
    return batch.commit();
  }, [cartRef, uid]);
};

export default useSubmitOrder;