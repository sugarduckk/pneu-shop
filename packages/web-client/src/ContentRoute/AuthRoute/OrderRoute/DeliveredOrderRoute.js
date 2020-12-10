import React from 'react'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const DeliveredOrderRoute = props => {
  return <PaginationScreen Card={OrderCard} collectionName='deliveredOrders' limit={5} />
}

export default DeliveredOrderRoute