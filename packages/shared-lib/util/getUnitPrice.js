const getUnitPrice = (prices, amount) => {
  const priceIndex = prices.length - prices.slice().reverse().findIndex(p => p.threshold <= amount) - 1;
  return prices[priceIndex].price
}

export default getUnitPrice