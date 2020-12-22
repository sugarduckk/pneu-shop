import React from 'react';
import Button from 'shared-lib/button/Button';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import useDeleteOrderForever from './useDeleteOrderForever';
import useDeletePendingReviewOrder from './useDeletePendingReviewOrder';
import useDeleteRejectedOrder from './useDeleteRejectedOrder';
import useApplyRefund from './useApplyRefund';

const OrderCard = ({ doc, id }) => {
  const deletePendingReviewOrder = useDeletePendingReviewOrder(id);
  const applyRefund = useApplyRefund(id)
  const deletedRejectedOrder = useDeleteRejectedOrder(id)
  const deleteOrderForever = useDeleteOrderForever(id);
  return <SimpleCard>
    <div>
      <div>{id}</div>
      <div>{doc.status}</div>
      {doc.status === OrderStatus.REJECTED.value && <div>{`Rejected Reason: ${doc.rejectedReason}`}</div>}
      <div>{doc.to}</div>
      <div>{doc.address.address}</div>
      <div>{doc.timestamp && doc.timestamp.toDate().toString()}</div>
    </div>
    <RowLayout>
      <Space />
      {doc.status === OrderStatus.PENDING_REVIEW.value && <Button onClick={deletePendingReviewOrder} bg='red'>delete</Button>}
      {doc.status === OrderStatus.REJECTED.value && <>
        <Button onClick={applyRefund}>Apply for refund</Button>
        <Button bg='red' onClick={deletedRejectedOrder}>Delete without refund</Button>
      </>}
      {doc.status === OrderStatus.DELETED.value && <Button onClick={deleteOrderForever} bg='red'>delete forever</Button>}
    </RowLayout>
  </SimpleCard>;
};

export default OrderCard;
