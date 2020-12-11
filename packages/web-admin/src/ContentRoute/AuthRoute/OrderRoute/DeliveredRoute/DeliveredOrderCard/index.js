import useUpdateOrderStatus from 'firebase-wrapper/firestore/useUpdateOrderStatus'
import React from 'react'
import useConfirm from 'redux-wrapper/hook/useConfrim'
import Button from 'shared-lib/button/Button'
import RowLayout from 'shared-lib/layout/RowLayout'
import SimpleCard from 'shared-lib/layout/SimpleCard'
import Space from 'shared-lib/layout/Space'
import OrderStatus from '../../../../../../../web-client/src/constant/OrderStatus'

const DeliveredOrderCard = ({ doc, id }) => {
  const updateOrderStatus = useUpdateOrderStatus(doc.uid, doc.id, OrderStatus.DELIVERED, OrderStatus.COMPLETED)
  const confirm = useConfirm(updateOrderStatus, 'Are you sure that this order is completed?', 'Updated to completed!')
  return <SimpleCard>
    <div>
      {id}
    </div>
    <RowLayout>
      <Space />
      <Button onClick={confirm}>Send to completed</Button>
    </RowLayout>
  </SimpleCard>
}

export default DeliveredOrderCard