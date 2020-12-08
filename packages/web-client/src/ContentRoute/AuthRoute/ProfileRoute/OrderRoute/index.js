import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import OrderCard from './OrderCard';
import OrderStatusFilter from './OrderStatusFilter';

const OrderRoute = props => {
  return <>
    <H1>My Orders</H1>
    <SimpleCard>
      <CardContainer style={{ width: '100%' }}>
        <OrderStatusFilter />
      </CardContainer>
    </SimpleCard>
    <PaginationScreen Card={OrderCard} collectionName='orders' limit={5} />
  </>;
};

export default OrderRoute;