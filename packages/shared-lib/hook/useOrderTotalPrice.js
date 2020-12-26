import React from 'react';

const useOrderTotalPrice = orderCart => {
  return React.useMemo(() => {
    return orderCart.reduce((pre, current) => {
      return pre + current.quantity * current.unitPrice;
    }, 0);
  }, [orderCart]);
};

export default useOrderTotalPrice;