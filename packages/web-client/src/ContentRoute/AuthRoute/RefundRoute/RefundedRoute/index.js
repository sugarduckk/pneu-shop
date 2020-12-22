import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import RefundedCard from './RefundedCard';

const RefundedRoute = props => {
  return <>
    <H1>Refunded Orders</H1>
    <PaginationScreen Card={RefundedCard} collectionName='refundedOrders' limit={5} />
  </>;
};

export default RefundedRoute;