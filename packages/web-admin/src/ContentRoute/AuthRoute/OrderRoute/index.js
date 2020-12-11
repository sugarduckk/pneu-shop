import React from 'react';
import { useParams } from 'react-router-dom';
import { BottomContainer } from 'shared-lib/layout';
import BottomTab from 'shared-lib/layout/BottomTab';
import Paging from 'shared-lib/layout/Paging';
import PagingLayout from 'shared-lib/layout/PagingLayout';
import OrderStatus from '../../../../../web-client/src/constant/OrderStatus';
import AdminRoutes from '../../../constant/AdminRoutes';
import useGoto from '../../../hook/useGoto';
import AcceptedRoute from './AcceptedRoute';
import CompletedRoute from './CompletedRoute';
import DeletedRoute from './DeletedRoute';
import DeliveredRoute from './DeliveredRoute';
import PendingReviewRoute from './PendingReviewRoute';

const OrderRoute = props => {
  const { orderStatus } = useParams()
  const gotoPendingReview = useGoto(AdminRoutes.ORDER_PENDING_REVIEW)
  const gotoAccepted = useGoto(AdminRoutes.ORDER_ACCEPTED)
  const gotoDelivered = useGoto(AdminRoutes.ORDER_DELIVERED)
  const gotoCompleted = useGoto(AdminRoutes.ORDER_COMPLETED)
  const gotoDeleted = useGoto(AdminRoutes.ORDER_DELETED)
  return <>
    <PagingLayout>
      <Paging show={orderStatus === 'pendingReview'}>
        <PendingReviewRoute />
      </Paging>
      <Paging show={orderStatus === 'accepted'}>
        <AcceptedRoute />
      </Paging>
      <Paging show={orderStatus === 'delivered'}>
        <DeliveredRoute />
      </Paging>
      <Paging show={orderStatus === 'completed'}>
        <CompletedRoute />
      </Paging>
      <Paging show={orderStatus === 'deleted'}>
        <DeletedRoute />
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={orderStatus === 'pendingReview'} onClick={gotoPendingReview}>Pending Review</BottomTab>
      <BottomTab disabled={orderStatus === 'accepted'} onClick={gotoAccepted}>Accepted</BottomTab>
      <BottomTab disabled={orderStatus === 'delivered'} onClick={gotoDelivered}>Delivered</BottomTab>
      <BottomTab disabled={orderStatus === 'completed'} onClick={gotoCompleted}>Completed</BottomTab>
      <BottomTab disabled={orderStatus === 'deleted'} onClick={gotoDeleted}>Deleted</BottomTab>
    </BottomContainer>
  </>;
};

export default OrderRoute;