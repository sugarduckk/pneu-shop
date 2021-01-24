import React from 'react';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import PendingReviewCard from '../PendingReviewCard';
import RejectedCard from '../RejectedCard';

const ReviewOrderCard = ({ doc, id }) => {
  switch (doc.status) {
    case OrderStatus.PENDING_REVIEW.value:
      return <PendingReviewCard doc={doc} id={id} />;
    case OrderStatus.REJECTED.value:
      return <RejectedCard doc={doc} id={id} />;
    default:
      return <div>Error No Status</div>;
  }
};

export default ReviewOrderCard;