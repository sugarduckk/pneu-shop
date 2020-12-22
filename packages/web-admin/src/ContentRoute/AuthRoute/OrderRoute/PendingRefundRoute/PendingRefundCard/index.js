import React from 'react'
import Button from 'shared-lib/button/Button'
import RowLayout from 'shared-lib/layout/RowLayout'
import SimpleCard from 'shared-lib/layout/SimpleCard'
import Space from 'shared-lib/layout/Space'
import useShowRefundDialog from '../../../../../hook/useShowRefundDialog'
import useShowRejectRefundDialog from '../../../../../hook/useShowRejectRefundDialog'

const PendingRefundCard = ({ doc, id }) => {
  const rejectRefund = useShowRejectRefundDialog(id)
  const refund = useShowRefundDialog(id)
  return <SimpleCard>
    <div>
      {id}
    </div>
    <RowLayout>
      <Space />
      <Button onClick={rejectRefund} bg='red'>reject refunding</Button>
      <Button onClick={refund}>send to refunded</Button>
    </RowLayout>
  </SimpleCard>
}

export default PendingRefundCard