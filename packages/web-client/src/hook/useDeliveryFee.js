import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';

const useDeliveryFee = () => {
  const { cart, cartData, config } = useGlobalState();
  return React.useMemo(() => {
    if (!cart || !cartData) return 0;
    const totalWeight = cart.reduce((total, currentItem, index) => {
      const { amount, productId } = currentItem;
      const unitWeight = cartData[productId] ? cartData[productId].weight : 0;
      return total + (amount * unitWeight);
    }, 0);
    var deliveryFees = {
      intown: 0,
      upcountry: 0
    };
    const { intownPrices, upcountryPrices } = config.delivery;
    for (let pricePoint of intownPrices) {
      if (pricePoint.threshold >= totalWeight) {
        deliveryFees.intown = pricePoint.price;
        break;
      }
    }
    for (let pricePoint of upcountryPrices) {
      if (pricePoint.threshold >= totalWeight) {
        deliveryFees.upcountry = pricePoint.price;
        break;
      }
    }
    return deliveryFees;
  }, [cart, cartData, config.delivery]);
};

export default useDeliveryFee;