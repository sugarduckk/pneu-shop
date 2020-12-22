import React from 'react'
import H1 from 'shared-lib/form-item/H1'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import ReviewOrderCard from './ReviewOrderCard'

const ReviewRoute = props => {
  return <>
    <H1>Pending Review Orders</H1>
    <PaginationScreen Card={ReviewOrderCard} collectionName='pendingReviewOrders' limit={5} />
  </>
}

export default ReviewRoute