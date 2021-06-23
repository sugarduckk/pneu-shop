import React from 'react';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import useOrderTotalPrice from 'shared-lib/hook/useOrderTotalPrice';
import LabelContainer from 'shared-lib/ui/LabelContainer';
import OrderContainer from 'shared-lib/ui/Order/OrderContainer';
import StatusBadge from 'shared-lib/ui/StatusBadge';
import TextContainer from 'shared-lib/ui/TextContainer';
import dateToString from 'shared-lib/util/dateToString';
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
        <StatusBadge status={order.status} />
      </TextContainer>
      {order.status === OrderStatus.REJECTED.value &&
        <>
          <LabelContainer>{S.ORDER_REJECT_REASON}</LabelContainer>
          <TextContainer color='red'>
            {order.rejectedReason}
          </TextContainer>
        </>}
      {order.status === OrderStatus.REFUND_REJECTED.value &&
        <>
          <LabelContainer>{S.REFUND_REJECT_REASON}</LabelContainer>
          <TextContainer color='red'>
            {order.refundRejectedReason}
          </TextContainer>
        </>}
      <LabelContainer>{S.ORDER_SUBMITTED}</LabelContainer>
      <TextContainer>
        {order.timestamp && dateToString(order.timestamp.toDate())}
      </TextContainer>
      <LabelContainer>{S.ORDER_ITEMS}</LabelContainer>
      <CartPreview cart={order.cart} />
      <LabelContainer>{S.ORDER_PRICE}</LabelContainer>
      <TextContainer>
        {`${numWithComma(order.deliveryFee ? totalPrice + order.deliveryFee : totalPrice)} ${S.THB}`}
      </TextContainer>
    </OrderContainer>
  </div>;
};

export default OrderPreview;