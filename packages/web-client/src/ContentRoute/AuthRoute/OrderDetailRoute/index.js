import React from 'react';
import { useParams } from 'react-router-dom';
import H1 from 'shared-lib/form-item/H1';
import { ContentContainer } from 'shared-lib/layout';

const OrderDetailRoute = props => {
  const { orderId } = useParams();
  return <ContentContainer>
    <H1>{orderId}</H1>
  </ContentContainer>;
};

export default OrderDetailRoute;