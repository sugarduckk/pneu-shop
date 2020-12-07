import React from 'react';
import generateOrderId from 'shared-lib/util/generateOrderId';
import resizeImage from 'shared-lib/util/resizeImage';
import sourceToImage from 'shared-lib/util/sourceToImage';
import { fs, increment, serverTimestamp, storage } from '..';

const useSubmitOrder = (uid, cart) => {
  return React.useCallback(async ({ to, address, paymentSlips }) => {
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
      uid,
      cart,
      to,
      address,
      paymentSlips: downloadUrls.map((src, srcIndex) => {
        return {
          src,
          name: paymentSlips[srcIndex].name
        };
      }),
      timestamp: serverTimestamp
    });
    batch.update(fs.collection('users').doc(uid), {
      nOrders: increment(1)
    });
    return batch.commit();
  }, [cart, uid]);
};

export default useSubmitOrder;