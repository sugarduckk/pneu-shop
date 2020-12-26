import React from 'react';
import Button from 'shared-lib/button/Button';
import DialogButton from 'shared-lib/button/DialogButton';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import OrderPreview from '../../../../../Component/OrderPreview';
import ClientRoutes from '../../../../../constant/ClientRoutes';
import useClientString from '../../../../../hook/useClientString';
import useGoto from '../../../../../hook/useGoto';
import useDeletePendingReviewOrder from './useDeletePendingReviewOrder';

const PendingReviewCard = ({ doc, id }) => {
  const S = useClientString();
  const deletePendingReviewOrder = useDeletePendingReviewOrder(id);
  const gotoOrderDetail = useGoto(`${ClientRoutes.ORDER_DETAIL}/${id}`);
  return <SimpleCard onClick={gotoOrderDetail}>
    <OrderPreview order={doc} />
    <RowLayout>
      <Space />
      <DialogButton bg='red' onClick={deletePendingReviewOrder}>
        {S.DELETE_ORDER}
      </DialogButton>
    </RowLayout>
  </SimpleCard>;
};

export default PendingReviewCard;