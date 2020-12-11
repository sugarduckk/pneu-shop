import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import AcceptedOrderCard from './AcceptedOrderCard';

const AcceptedRoute = props => {
  return <>
    <H1>Accepted Orders</H1>
    <PaginationScreen Card={AcceptedOrderCard} collectionName='acceptedOrders' limit={5} />
  </>;
};

export default AcceptedRoute;