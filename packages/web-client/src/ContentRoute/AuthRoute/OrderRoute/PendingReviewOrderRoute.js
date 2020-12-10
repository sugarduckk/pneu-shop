import React from 'react'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const PendingReviewOrderRoute = props => {
  return <PaginationScreen Card={OrderCard} collectionName='pendingReviewOrders' limit={5} />
}

export default PendingReviewOrderRoute