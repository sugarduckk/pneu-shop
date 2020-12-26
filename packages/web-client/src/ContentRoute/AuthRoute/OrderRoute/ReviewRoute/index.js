import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import useClientString from '../../../../hook/useClientString';
import ReviewOrderCard from './ReviewOrderCard';

const ReviewRoute = props => {
  const S = useClientString();
  return <>
    <H1>{S.PENDING_REVIEW}</H1>
    <PaginationScreen Card={ReviewOrderCard} collectionName='pendingReviewOrders' limit={5} />
  </>;
};

export default ReviewRoute;