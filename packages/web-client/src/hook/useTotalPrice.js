import React from 'react'
import useGlobalState from 'redux-wrapper/hook/useGlobalState';

const useTotalPrice = () => {
  const { cart, cartData } = useGlobalState()
  return React.useMemo(() => {
    if (!cart || !cartData) return 0;
    return cart.reduce((total, currentItem, index) => {
      const { amount, productId } = currentItem
      var unitPrice = 0;
      if (cartData && cartData[productId]) {
        const prices = cartData[productId].prices
        console.log(prices)
        const priceIndex = prices.length - prices.slice().reverse().findIndex(p => p.threshold <= amount) - 1;
        unitPrice = prices[priceIndex].price
      }
      return total + amount * unitPrice
    }, 0)
  }, [cart, cartData])
}

export default useTotalPrice