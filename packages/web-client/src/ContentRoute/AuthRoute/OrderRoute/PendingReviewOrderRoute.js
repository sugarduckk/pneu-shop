import React from 'react'
import H1 from 'shared-lib/form-item/H1'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const PendingReviewOrderRoute = props => {
  return <>
    <H1>Pending Review Orders</H1>
    <PaginationScreen Card={OrderCard} collectionName='pendingReviewOrders' limit={5} />
  </>
}

export default PendingReviewOrderRoute