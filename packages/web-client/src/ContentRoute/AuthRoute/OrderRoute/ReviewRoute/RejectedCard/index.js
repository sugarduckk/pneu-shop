import React from 'react'
import Button from 'shared-lib/button/Button'
import RowLayout from 'shared-lib/layout/RowLayout'
import SimpleCard from 'shared-lib/layout/SimpleCard'
import Space from 'shared-lib/layout/Space'
import useApplyRefund from './useApplyRefund'
import useDeleteRejectedOrder from './useDeleteRejectedOrder'

const RejectedCard = ({ doc, id }) => {
  const applyRefund = useApplyRefund(id)
  const deletedRejectedOrder = useDeleteRejectedOrder(id)
  return <SimpleCard>
    <div>{id}</div>
    <RowLayout>
      <Space />
      <Button onClick={applyRefund}>Apply for refund</Button>
      <Button bg='red' onClick={deletedRejectedOrder}>Delete without refund</Button>
    </RowLayout>
  </SimpleCard>
}

export default RejectedCard