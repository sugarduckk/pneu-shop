import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import RejectedOrderCard from './RejectedOrderCard';

const RejectedRoute = props => {
  return <>
    <H1>Rejected Orders</H1>
    <PaginationScreen Card={RejectedOrderCard} collectionName='rejectedOrders' limit={5} />
  </>;
};

export default RejectedRoute;