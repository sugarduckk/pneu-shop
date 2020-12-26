import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import useClientString from '../../../../hook/useClientString';
import AcceptedOrderCard from './AcceptedOrderCard';

const AcceptedRoute = props => {
  const S = useClientString();
  return <>
    <H1>{S.ACCEPTED}</H1>
    <PaginationScreen Card={AcceptedOrderCard} collectionName='acceptedOrders' limit={5} />
  </>;
};

export default AcceptedRoute;