import React from 'react'
import Button from 'shared-lib/button/Button'
import RowLayout from 'shared-lib/layout/RowLayout'
import SimpleCard from 'shared-lib/layout/SimpleCard'
import Space from 'shared-lib/layout/Space'
import useDeletePendingReviewOrder from './useDeletePendingReviewOrder'

const PendingReviewCard = ({ doc, id }) => {
  const deletePendingReviewOrder = useDeletePendingReviewOrder(id)
  return <SimpleCard>
    <div>{id}</div>
    <RowLayout>
      <Space />
      <Button bg='red' onClick={deletePendingReviewOrder}>delete</Button>
    </RowLayout>
  </SimpleCard>
}

export default PendingReviewCard