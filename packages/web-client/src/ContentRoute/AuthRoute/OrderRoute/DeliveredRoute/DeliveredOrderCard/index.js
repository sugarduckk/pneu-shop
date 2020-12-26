import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import OrderPreview from '../../../../../Component/OrderPreview';

const DeliveredOrderCard = ({ doc, id }) => {
  return <SimpleCard>
    <OrderPreview order={doc} />
  </SimpleCard>;
};

export default DeliveredOrderCard;