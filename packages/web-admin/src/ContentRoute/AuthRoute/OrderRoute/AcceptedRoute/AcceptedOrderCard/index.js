import useUpdateOrderStatus from 'firebase-wrapper/firestore/useUpdateOrderStatus'
import React from 'react'
import useConfirm from 'redux-wrapper/hook/useConfrim'
import Button from 'shared-lib/button/Button'
import RowLayout from 'shared-lib/layout/RowLayout'
import SimpleCard from 'shared-lib/layout/SimpleCard'
import Space from 'shared-lib/layout/Space'
import OrderStatus from 'shared-lib/constant/OrderStatus';

const AcceptedOrderCard = ({ doc, id }) => {
  const updateOrderStatus = useUpdateOrderStatus(doc.uid, doc.id, OrderStatus.ACCEPTED, OrderStatus.DELIVERED)
  const confirm = useConfirm(updateOrderStatus, 'Are you sure that this order is delivered?', 'Updated to delivered!')
  return <SimpleCard>
    <div>
      {id}
    </div>
    <RowLayout>
      <Space />
      <Button onClick={confirm}>Send to deliver</Button>
    </RowLayout>
  </SimpleCard>
}

export default AcceptedOrderCard