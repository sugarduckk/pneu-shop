import React from 'react';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import OrderCard from '../../../../../../web-client/src/ContentRoute/AuthRoute/OrderRoute/OrderCard';

const AcceptedRoute = props => {
  return <>
    <PaginationScreen Card={OrderCard} collectionName='acceptedOrders' limit={5} />
  </>;
};

export default AcceptedRoute;