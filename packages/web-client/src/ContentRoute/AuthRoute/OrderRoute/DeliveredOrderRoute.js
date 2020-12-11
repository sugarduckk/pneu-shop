import React from 'react'
import H1 from 'shared-lib/form-item/H1'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const DeliveredOrderRoute = props => {
  return <>
    <H1>Delivered Orders</H1>
    <PaginationScreen Card={OrderCard} collectionName='deliveredOrders' limit={5} />
  </>
}

export default DeliveredOrderRoute