import React from 'react';
import { fs } from '..';

const useOrder = (ownerUid, orderId) => {
  const [order, setOrder] = React.useState();
  React.useEffect(() => {
    console.log(`Order Loaded: ${orderId}`);
    return fs.collection('users').doc(ownerUid).collection('orders').doc(orderId).onSnapshot(snap => {
      if (snap.exists) {
        setOrder(snap.data());
      }
      else {
        setOrder(null);
      }
    });
  }, [ownerUid, orderId]);
  return order;
};

export default useOrder;