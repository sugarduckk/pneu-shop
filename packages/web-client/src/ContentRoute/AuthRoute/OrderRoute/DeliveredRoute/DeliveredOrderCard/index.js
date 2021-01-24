import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import OrderPreview from '../../../../../Component/OrderPreview';
import ClientRoutes from '../../../../../constant/ClientRoutes';
import useGoto from '../../../../../hook/useGoto';

const DeliveredOrderCard = ({ doc, id }) => {
  const gotoOrderDetail = useGoto(`${ClientRoutes.ORDER_DETAIL}/${id}`);
  return <SimpleCard onClick={gotoOrderDetail}>
    <OrderPreview order={doc} />
  </SimpleCard>;
};

export default DeliveredOrderCard;