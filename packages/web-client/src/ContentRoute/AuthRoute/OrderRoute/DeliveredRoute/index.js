import React from 'react'
import H1 from 'shared-lib/form-item/H1'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import DeliveredOrderCard from './DeliveredOrderCard'

const DeliveredRoute = props => {
  return <>
    <H1>Delivered Orders</H1>
    <PaginationScreen Card={DeliveredOrderCard} collectionName='deliveredOrders' limit={5} />
  </>
}

export default DeliveredRoute