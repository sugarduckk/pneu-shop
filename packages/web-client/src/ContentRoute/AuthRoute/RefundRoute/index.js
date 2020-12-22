import React from 'react'
import { useParams } from 'react-router-dom'
import OrderStatus from 'shared-lib/constant/OrderStatus'
import { BottomContainer } from 'shared-lib/layout'
import BottomTab from 'shared-lib/layout/BottomTab'
import Paging from 'shared-lib/layout/Paging'
import PagingLayout from 'shared-lib/layout/PagingLayout'
import ClientRoutes from '../../../constant/ClientRoutes'
import useGoto from '../../../hook/useGoto'
import PendingRefundRoute from './PendingRefundRoute'
import RefundedRoute from './RefundedRoute'
import RefundRejectedRoute from './RefundRejectedRoute'

const RefundRoute = props => {
  const { refundStatus } = useParams()
  const gotoPendingRefund = useGoto(ClientRoutes.PENDING_REFUND)
  const gotoRefunded = useGoto(ClientRoutes.REFUND_REFUNDED)
  const gotoRefundRejected = useGoto(ClientRoutes.REFUND_REJECTED)
  return <>
    <PagingLayout>
      <Paging show={refundStatus === OrderStatus.PENDING_REFUND.route}>
        <PendingRefundRoute />
      </Paging>
      <Paging show={refundStatus === OrderStatus.REFUNDED.route}>
        <RefundedRoute />
      </Paging>
      <Paging show={refundStatus === OrderStatus.REFUND_REJECTED.route}>
        <RefundRejectedRoute />
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={refundStatus === OrderStatus.PENDING_REFUND.route} onClick={gotoPendingRefund}>Pending Refund</BottomTab>
      <BottomTab disabled={refundStatus === OrderStatus.REFUNDED.route} onClick={gotoRefunded}>Refunded</BottomTab>
      <BottomTab disabled={refundStatus === OrderStatus.REFUND_REJECTED.route} onClick={gotoRefundRejected}>Refund Rejected</BottomTab>
    </BottomContainer>
  </>
}

export default RefundRoute