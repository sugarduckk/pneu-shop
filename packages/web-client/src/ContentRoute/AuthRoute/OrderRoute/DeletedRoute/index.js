import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import useClientString from '../../../../hook/useClientString';
import DeletedOrderCard from './DeletedOrderCard';

const DeletedRoute = props => {
  const S = useClientString();
  return <>
    <H1>{S.DELETED}</H1>
    <PaginationScreen Card={DeletedOrderCard} collectionName='deletedOrders' limit={5} />
  </>;
};

export default DeletedRoute;