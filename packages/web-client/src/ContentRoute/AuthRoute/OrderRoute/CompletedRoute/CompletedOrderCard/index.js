import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import OrderPreview from '../../../../../Component/OrderPreview';

const CompletedOrderCard = ({ doc, id }) => {
  return <SimpleCard>
    <OrderPreview order={doc} />
  </SimpleCard>;
};

export default CompletedOrderCard;