import React from 'react'
import H1 from 'shared-lib/form-item/H1'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const CompletedOrderRoute = props => {
  return <>
    <H1>Completed Orders</H1>
    <PaginationScreen Card={OrderCard} collectionName='completedOrders' limit={5} />
  </>
}

export default CompletedOrderRoute