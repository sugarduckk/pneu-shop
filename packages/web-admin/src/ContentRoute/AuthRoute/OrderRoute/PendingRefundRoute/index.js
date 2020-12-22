import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import PendingRefundCard from './PendingRefundCard';

const PendingRefundRoute = props => {
  return <>
    <H1>Pending Refund Orders</H1>
    <PaginationScreen Card={PendingRefundCard} collectionName='pendingRefundOrders' limit={5} />
  </>;
};

export default PendingRefundRoute;