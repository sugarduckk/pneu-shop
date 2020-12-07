import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import OrderCard from './OrderCard';

const OrderRoute = props => {
  return <>
    <H1>OrderRoute</H1>
    <PaginationScreen Card={OrderCard} collectionName='orders' limit={5} />
  </>;
};

export default OrderRoute;