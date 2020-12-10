import React from 'react';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import PendingReviewOrder from './PendingReviewOrder';

const PendingReviewRoute = props => {
  return <>
    <PaginationScreen Card={PendingReviewOrder} collectionName='pendingReviewOrders' limit={5} />
  </>;
};

export default PendingReviewRoute;