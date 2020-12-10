import React from 'react'
import PaginationScreen from 'shared-lib/screen/PaginationScreen'
import OrderCard from './OrderCard'

const DeletedOrderRoute = props => {
  return <PaginationScreen Card={OrderCard} collectionName='deletedOrders' limit={5} />
}

export default DeletedOrderRoute