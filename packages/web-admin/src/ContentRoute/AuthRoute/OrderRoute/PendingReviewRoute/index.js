import React from 'react';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import OrderCard from '../../../../../../web-client/src/ContentRoute/AuthRoute/ProfileRoute/OrderRoute/OrderCard';

const PendingReviewRoute = props => {
  return <>
    <PaginationScreen Card={OrderCard} collectionName='pendingReviewOrders' limit={5} />
  </>;
};

export default PendingReviewRoute;