import React from 'react';
import useOrderTotalPrice from 'shared-lib/hook/useOrderTotalPrice';
import LabelContainer from 'shared-lib/ui/LabelContainer';
import OrderContainer from 'shared-lib/ui/Order/OrderContainer';
import TextContainer from 'shared-lib/ui/TextContainer';
import numWithComma from 'shared-lib/util/numWithComma';
import useClientString from '../../hook/useClientString';
import CartPreview from './CartPreview';

const OrderPreview = ({ order }) => {
  const S = useClientString();
  const totalPrice = useOrderTotalPrice(order.cart);
  return <div style={{ width: '100%' }}>
    <OrderContainer>
      <LabelContainer>{S.ORDER_ID}</LabelContainer>
      <TextContainer>
        {order.id}
      </TextContainer>
      <LabelContainer>{S.ORDER_STATUS}</LabelContainer>
      <TextContainer>
        {order.status}
      </TextContainer>
      <LabelContainer>{S.ORDER_SUBMITTED}</LabelContainer>
      <TextContainer>
        {order.timestamp && order.timestamp.toDate().toString()}
      </TextContainer>
      <LabelContainer>{S.ORDER_ITEMS}</LabelContainer>
      <CartPreview cart={order.cart} />
      <LabelContainer>{S.ORDER_PRICE}</LabelContainer>
      <TextContainer>
        {`${numWithComma(totalPrice)} ${S.THB}`}
      </TextContainer>
    </OrderContainer>


  </div>;
};

export default OrderPreview;