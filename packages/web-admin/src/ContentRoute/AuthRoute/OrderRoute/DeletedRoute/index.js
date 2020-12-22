import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import DeletedOrderCard from './DeletedOrderCard';

const DeletedRoute = props => {
  return <>
    <H1>Deleted Orders</H1>
    <PaginationScreen Card={DeletedOrderCard} collectionName='deletedOrders' limit={5} />
  </>;
};

export default DeletedRoute;