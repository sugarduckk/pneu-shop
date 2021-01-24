import React from 'react';
import { fs } from '..';

const useOrderHistory = (ownerUid, orderId) => {
  const [history, setHistory] = React.useState();
  React.useEffect(() => {
    console.log(`Order History Loaded: ${orderId}`);
    return fs.collection('users').doc(ownerUid).collection('orders').doc(orderId).collection('history').orderBy('timestamp', 'desc').onSnapshot(snap => {
      if (!snap.empty) {
        setHistory(snap.docs);
      }
      else {
        setHistory([]);
      }
    });
  }, [ownerUid, orderId]);
  return history;
};

export default useOrderHistory;