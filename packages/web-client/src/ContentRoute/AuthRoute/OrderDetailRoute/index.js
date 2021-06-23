import useOrder from 'firebase-wrapper/firestore/useOrder';
import useOrderHistory from 'firebase-wrapper/firestore/useOrderHistory';
import React from 'react';
import { useParams } from 'react-router-dom';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import H1 from 'shared-lib/form-item/H1';
import H2 from 'shared-lib/form-item/H2';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import OrderPreview from '../../../Component/OrderPreview';
import useClientString from '../../../hook/useClientString';
import AddressCard from './AddressCard';
import HistoryCard from './HistoryCard';
import PaymentSlipCard from './PaymentSlipCard';

const OrderDetailRoute = props => {
  const S = useClientString();
  const { user } = useGlobalState();
  const { orderId } = useParams();
  const order = useOrder(user.uid, orderId);
  const history = useOrderHistory(user.uid, orderId);
  if (!order) return <DialogLoading />;
  return <ContentContainer>
    <H1>{`${S.ORDER_ID}: ${orderId}`}</H1>
    <SimpleCard>
      <OrderPreview order={order} />
    </SimpleCard>
    <H2>Deliver to</H2>
    <CardContainer>
      <AddressCard address={order.address} to={order.to} tel={order.tel} />
    </CardContainer>
    <H2>Payment</H2>
    <CardContainer>
      <PaymentSlipCard slips={order.paymentSlips} />
    </CardContainer>
    {order.status === OrderStatus.REFUNDED.value && <><H2>Refund</H2>
      <CardContainer>
        <PaymentSlipCard slips={order.refundSlips} />
      </CardContainer></>}
    <H2>History</H2>
    {history ? history.map(doc => {
      return <HistoryCard history={doc.data()} key={doc.id} />;
    })
      :
      <DialogLoading />
    }
  </ContentContainer>;
};

export default OrderDetailRoute;