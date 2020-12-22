import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import RefundRejectedCard from './RefundRejectedCard';

const RefundRejectedRoute = props => {
  return <>
    <H1>Refund Rejected Orders</H1>
    <PaginationScreen Card={RefundRejectedCard} collectionName='refundRejectedOrders' limit={5} />
  </>;
};

export default RefundRejectedRoute;