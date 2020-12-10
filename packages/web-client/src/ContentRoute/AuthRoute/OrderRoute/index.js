import React from 'react'
import { BottomContainer } from 'shared-lib/layout'
import PagingLayout from 'shared-lib/layout/PagingLayout'
import BottomTab from 'shared-lib/layout/BottomTab';
import Paging from 'shared-lib/layout/Paging';
import { useParams } from 'react-router-dom';
import useGoto from '../../../hook/useGoto';
import ClientRoutes from '../../../constant/ClientRoutes';
import PendingReviewOrderRoute from './PendingReviewOrderRoute';
import DeletedOrderRoute from './DeletedOrderRoute';
import AcceptedOrderRoute from './AcceptedOrderRoute';
import DeliveredOrderRoute from './DeliveredOrderRoute';
import CompletedOrderRoute from './CompletedOrderRoute';


const OrderRoute = props => {
  const { orderStatus } = useParams()
  const gotoPendingReview = useGoto(ClientRoutes.ORDER_PENDING_REVIEW)
  const gotoAccepted = useGoto(ClientRoutes.ORDER_ACCEPTED)
  const gotoDelivered = useGoto(ClientRoutes.ORDER_DELIVERED)
  const gotoCompleted = useGoto(ClientRoutes.ORDER_COMPLETED)
  const gotoDeleted = useGoto(ClientRoutes.ORDER_DELETED)
  return <>
    <PagingLayout>
      <Paging show={orderStatus === 'pendingReview'}>
        <PendingReviewOrderRoute />
      </Paging>
      <Paging show={orderStatus === 'accepted'}>
        <AcceptedOrderRoute />
      </Paging>
      <Paging show={orderStatus === 'delivered'}>
        <DeliveredOrderRoute />
      </Paging>
      <Paging show={orderStatus === 'completed'}>
        <CompletedOrderRoute />
      </Paging>
      <Paging show={orderStatus === 'deleted'}>
        <DeletedOrderRoute />
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={orderStatus === 'pendingReview'} onClick={gotoPendingReview}>Pending Review</BottomTab>
      <BottomTab disabled={orderStatus === 'accepted'} onClick={gotoAccepted}>Accepted</BottomTab>
      <BottomTab disabled={orderStatus === 'delivered'} onClick={gotoDelivered}>Delivered</BottomTab>
      <BottomTab disabled={orderStatus === 'completed'} onClick={gotoCompleted}>Completed</BottomTab>
      <BottomTab disabled={orderStatus === 'deleted'} onClick={gotoDeleted}>Deleted</BottomTab>
    </BottomContainer>
  </>
}

export default OrderRoute