import React from 'react'
import H1 from 'shared-lib/form-item/H1'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const AcceptedOrderRoute = props => {
  return <>
    <H1>Accepted Orders</H1>
    <PaginationScreen Card={OrderCard} collectionName='acceptedOrders' limit={5} />
  </>
}

export default AcceptedOrderRoute