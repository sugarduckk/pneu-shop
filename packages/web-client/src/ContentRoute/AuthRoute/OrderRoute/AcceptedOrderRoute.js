import React from 'react'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const AcceptedOrderRoute = props => {
  return <PaginationScreen Card={OrderCard} collectionName='acceptedOrders' limit={5} />
}

export default AcceptedOrderRoute