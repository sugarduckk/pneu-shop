import useOrder from 'firebase-wrapper/firestore/useOrder';
import useOrderHistory from 'firebase-wrapper/firestore/useOrderHistory';
import React from 'react';
import { useParams } from 'react-router-dom';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import H1 from 'shared-lib/form-item/H1';
import H2 from 'shared-lib/form-item/H2';
import { ContentContainer } from 'shared-lib/layout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import OrderPreview from '../../../Component/OrderPreview';

const OrderDetailRoute = props => {
  const { user } = useGlobalState();
  const { orderId } = useParams();
  const order = useOrder(user.uid, orderId);
  const history = useOrderHistory(user.uid, orderId);
  if (!order) return <DialogLoading />;
  return <ContentContainer>
    <H1>{`Order ID: ${orderId}`}</H1>
    <SimpleCard>
      <OrderPreview order={order} />
    </SimpleCard>
    <H2>History</H2>
    {history ? history.map(doc => {
      return <SimpleCard key={doc.id}>
        {doc.data().status}
      </SimpleCard>;
    })
      :
      <DialogLoading />
    }
  </ContentContainer>;
};

export default OrderDetailRoute;