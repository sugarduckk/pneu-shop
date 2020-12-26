import React from 'react';
import { useParams } from 'react-router-dom';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import { BottomContainer } from 'shared-lib/layout';
import BottomTab from 'shared-lib/layout/BottomTab';
import Paging from 'shared-lib/layout/Paging';
import PagingLayout from 'shared-lib/layout/PagingLayout';
import ClientRoutes from '../../../constant/ClientRoutes';
import useClientString from '../../../hook/useClientString';
import useGoto from '../../../hook/useGoto';
import AcceptedRoute from './AcceptedRoute';
import CompletedRoute from './CompletedRoute';
import DeletedRoute from './DeletedRoute';
import DeliveredRoute from './DeliveredRoute';
import ReviewRoute from './ReviewRoute';


const OrderRoute = props => {
  const S = useClientString();
  const { orderStatus } = useParams();
  const gotoPendingReview = useGoto(ClientRoutes.ORDER_PENDING_REVIEW);
  const gotoAccepted = useGoto(ClientRoutes.ORDER_ACCEPTED);
  const gotoDelivered = useGoto(ClientRoutes.ORDER_DELIVERED);
  const gotoCompleted = useGoto(ClientRoutes.ORDER_COMPLETED);
  const gotoDeleted = useGoto(ClientRoutes.ORDER_DELETED);
  return <>
    <PagingLayout>
      <Paging show={orderStatus === OrderStatus.PENDING_REVIEW.route}>
        <ReviewRoute />
      </Paging>
      <Paging show={orderStatus === OrderStatus.ACCEPTED.route}>
        <AcceptedRoute />
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
      <BottomTab disabled={orderStatus === OrderStatus.PENDING_REVIEW.route} onClick={gotoPendingReview}>{S.PENDING_REVIEW}</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.ACCEPTED.route} onClick={gotoAccepted}>{S.ACCEPTED}</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.DELIVERED.route} onClick={gotoDelivered}>{S.DELIVERED}</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.COMPLETED.route} onClick={gotoCompleted}>{S.COMPLETED}</BottomTab>
      <BottomTab disabled={orderStatus === OrderStatus.DELETED.route} onClick={gotoDeleted}>{S.DELETED}</BottomTab>
    </BottomContainer>
  </>;
};

export default OrderRoute;