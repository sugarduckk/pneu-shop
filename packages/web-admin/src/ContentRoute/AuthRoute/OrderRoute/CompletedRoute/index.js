import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import CompletedOrderCard from './CompletedOrderCard';

const CompletedRoute = props => {
  return <>
    <H1>Accepted Orders</H1>
    <PaginationScreen Card={CompletedOrderCard} collectionName='completedOrders' limit={5} />
  </>;
};

export default CompletedRoute;