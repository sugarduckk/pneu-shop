import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import useClientString from '../../../../hook/useClientString';
import DeliveredOrderCard from './DeliveredOrderCard';

const DeliveredRoute = props => {
  const S = useClientString();
  return <>
    <H1>{S.DELIVERED}</H1>
    <PaginationScreen Card={DeliveredOrderCard} collectionName='deliveredOrders' limit={5} />
  </>;
};

export default DeliveredRoute;