import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';

const DeliveryPriceCard = ({ values }) => {
  return <SimpleCard>
    <div>{`Threshold: ${values.threshold}`}</div>
    <div>{`Price: ${values.price}`}</div>
  </SimpleCard>;
};

export default DeliveryPriceCard;