import React from 'react';
import Button from 'shared-lib/button/Button';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import OrderStatus from '../../../constant/OrderStatus';
import useDeleteOrderForever from './useDeleteOrderForever';
import useDeletePendingReviewOrder from './useDeletePendingReviewOrder';

const OrderCard = ({ doc, id }) => {
  const deletePendingReviewOrder = useDeletePendingReviewOrder(id);
  const deleteOrderForever = useDeleteOrderForever(id);
  return <SimpleCard>
    <div>
      <div>{id}</div>
      <div>{doc.status}</div>
      <div>{doc.to}</div>
      <div>{doc.address.address}</div>
      <div>{doc.timestamp && doc.timestamp.toDate().toString()}</div>
    </div>
    <RowLayout>
      <Space />
      {doc.status === OrderStatus.PENDING_REVIEW && <Button onClick={deletePendingReviewOrder} bg='red'>delete</Button>}
      {doc.status === OrderStatus.DELETED && <Button onClick={deleteOrderForever} bg='red'>delete forever</Button>}
    </RowLayout>
  </SimpleCard>;
};

export default OrderCard;
