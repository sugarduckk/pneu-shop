import useUpdateOrderStatus from 'firebase-wrapper/firestore/useUpdateOrderStatus'
import React from 'react'
import useConfirm from 'redux-wrapper/hook/useConfrim'
import useShowSlipsDialog from 'redux-wrapper/hook/useShowSlipsDialog'
import Button from 'shared-lib/button/Button'
import RowLayout from 'shared-lib/layout/RowLayout'
import SimpleCard from 'shared-lib/layout/SimpleCard'
import Space from 'shared-lib/layout/Space'
import OrderStatus from '../../../../../../../web-client/src/constant/OrderStatus'

const PendingReviewOrder = ({ doc, id }) => {
  const showSlipsDialog = useShowSlipsDialog(doc.paymentSlips)
  const totalPrice = React.useMemo(() => {
    return doc.cart.reduce((total, currentPrice) => {
      return total + currentPrice.quantity * currentPrice.unitPrice
    }, 0)
  }, [doc])
  const updateOrderStatus = useUpdateOrderStatus(doc.uid, doc.id, OrderStatus.PENDING_REVIEW, OrderStatus.ACCEPTED)
  const confirm = useConfirm(updateOrderStatus, 'Are you sure to accept?', 'Order accepted!')
  return <SimpleCard>
    <div>{doc.id}</div>
    <div>{totalPrice}</div>
    <RowLayout>
      <Space />
      <Button>view order</Button>
      <Button onClick={showSlipsDialog}>view slip</Button>
      <Button onClick={confirm}>accept</Button>
    </RowLayout>
  </SimpleCard>
}

export default PendingReviewOrder