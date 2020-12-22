import React from 'react';
import { useParams } from 'react-router-dom';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import { BottomContainer } from 'shared-lib/layout';
import BottomTab from 'shared-lib/layout/BottomTab';
import Paging from 'shared-lib/layout/Paging';
import PagingLayout from 'shared-lib/layout/PagingLayout';
import AdminRoutes from '../../../constant/AdminRoutes';
import useGoto from '../../../hook/useGoto';
import AcceptedRoute from './AcceptedRoute';
import CompletedRoute from './CompletedRoute';
import DeletedRoute from './DeletedRoute';
import DeliveredRoute from './DeliveredRoute';
import PendingRefundRoute from './PendingRefundRoute';
import PendingReviewRoute from './PendingReviewRoute';
import RefundedRoute from './RefundedRoute';
import RefundRejectedRoute from './RefundRejectedRoute';
import RejectedRoute from './RejectedRoute';

const OrderRoute = props => {
  const { orderStatus } = useParams()
  const gotoPendingReview = useGoto(AdminRoutes.ORDER_PENDING_REVIEW)
  const gotoPendingRefund = useGoto(AdminRoutes.ORDER_PENDING_REFUND)
  const gotoRejectedReview = useGoto(AdminRoutes.ORDER_REJECTED)
  const gotoRefundRejected = useGoto(AdminRoutes.ORDER_REFUND_REJECTED)
  const gotoAccepted = useGoto(AdminRoutes.ORDER_ACCEPTED)
  const gotoRefunded = useGoto(AdminRoutes.ORDER_REFUNDED)
  const gotoDelivered = useGoto(AdminRoutes.ORDER_DELIVERED)
  const gotoCompleted = useGoto(AdminRoutes.ORDER_COMPLETED)
  const gotoDeleted = useGoto(AdminRoutes.ORDER_DELETED)
  return <>
    <PagingLayout>
      <Paging show={orderStatus === OrderStatus.PENDING_REVIEW.route}>
        <PendingReviewRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.PENDING_REFUND.route}>
        <PendingRefundRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.REJECTED.route}>
        <RejectedRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.REFUND_REJECTED.route}>
        <RefundRejectedRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.ACCEPTED.route}>
        <AcceptedRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.REFUNDED.route}>
        <RefundedRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.DELIVERED.route}>
        <DeliveredRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.COMPLETED.route}>
        <CompletedRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.DELETED.route}>
        <DeletedRoute />
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={orderStatus === OrderStatus.PENDING_REVIEW.route} onClick={gotoPendingReview}>Pending Review</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.PENDING_REFUND.route} onClick={gotoPendingRefund}>Pending Refund</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.REJECTED.route} onClick={gotoRejectedReview}>Rejected</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.REFUND_REJECTED.route} onClick={gotoRefundRejected}>Refund Rejected</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.ACCEPTED.route} onClick={gotoAccepted}>Accepted</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.REFUNDED.route} onClick={gotoRefunded}>Refunded</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.DELIVERED.route} onClick={gotoDelivered}>Delivered</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.COMPLETED.route} onClick={gotoCompleted}>Completed</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.DELETED.route} onClick={gotoDeleted}>Deleted</BottomTab>
    </BottomContainer>
  </>;
};

export default OrderRoute;