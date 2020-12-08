import React from 'react';
import Button from 'shared-lib/button/Button';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import OrderStatus from '../../../../constant/OrderStatus';
import useDeleteOrderForever from './useDeleteOrderForever';
import useDeletePendingReviewOrder from './useDeletePendingReviewOrder';

const OrderCard = ({ doc }) => {
  const deletePendingReviewOrder = useDeletePendingReviewOrder(doc.id);
  const deleteOrderForever = useDeleteOrderForever(doc.id);
  const data = React.useMemo(() => {
    return doc.data();
  }, [doc]);
  return <SimpleCard>
    <div>
      <div>{doc.id}</div>
      <div>{data.status}</div>
      <div>{data.to}</div>
      <div>{data.address}</div>
      <div>{data.timestamp && data.timestamp.toDate().toString()}</div>
    </div>
    <RowLayout>
      <Space />
      {data.status === OrderStatus.PENDING_REVIEW && <Button onClick={deletePendingReviewOrder} bg='red'>delete</Button>}
      {data.status === OrderStatus.DELETED && <Button onClick={deleteOrderForever} bg='red'>delete forever</Button>}
    </RowLayout>
  </SimpleCard>;
};

export default OrderCard;
