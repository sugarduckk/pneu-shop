import React from 'react';
import SimpleCard from '../../layout/SimpleCard';

const PriceCard = ({ values }) => {
  return <SimpleCard>
    <div>{`Threshold: ${values.threshold}`}</div>
    <div>{`Price: ${values.price}`}</div>
  </SimpleCard>;
};

export default PriceCard;