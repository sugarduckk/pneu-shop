import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import useClientString from '../../../../hook/useClientString';
import CompletedOrderCard from './CompletedOrderCard';

const CompletedRoute = props => {
  const S = useClientString();
  return <>
    <H1>{S.COMPLETED}</H1>
    <PaginationScreen Card={CompletedOrderCard} collectionName='completedOrders' limit={5} />
  </>;
};

export default CompletedRoute;