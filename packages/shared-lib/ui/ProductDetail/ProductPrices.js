import React from 'react';

const ProductPrices = ({ prices }) => {
  if (!prices) return <div>No prices</div>;
  return <div>
    {prices.map((p, index, readonly) => {
      if (index === readonly.length - 1) {
        return <div key={index}>{`At least ${p.threshold} pieces: ${p.price} THB per piece`}</div>;
      }
      else {
        return <div key={index}>{`${p.threshold} to ${readonly[index + 1].threshold - 1} pieces: ${p.price} THB per piece`}</div>;
      }
    })}
  </div>;
};

export default ProductPrices;