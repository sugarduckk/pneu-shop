const getUnitPrice = (prices, amount) => {
  const temp = prices.slice().reverse().findIndex(p => p.threshold <= amount);
  if (temp < 0) {
    return prices[0].price;
  }
  else {
    const priceIndex = prices.length - temp - 1;
    return prices[priceIndex].price;
  }

};

export default getUnitPrice;