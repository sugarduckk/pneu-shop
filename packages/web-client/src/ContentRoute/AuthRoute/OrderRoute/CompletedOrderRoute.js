import React from 'react'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const CompletedOrderRoute = props => {
  return <PaginationScreen Card={OrderCard} collectionName='completedOrders' limit={5} />
}

export default CompletedOrderRoute