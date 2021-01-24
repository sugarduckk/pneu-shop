import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import OrderPreview from '../../../../Component/OrderPreview';

const PendingRefundCard = ({ doc, id }) => {
  return <SimpleCard>
    <OrderPreview order={doc} />
  </SimpleCard>;
};

export default PendingRefundCard;