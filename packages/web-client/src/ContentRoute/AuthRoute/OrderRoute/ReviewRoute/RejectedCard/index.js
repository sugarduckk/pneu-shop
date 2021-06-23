import React from 'react';
import DialogButton from 'shared-lib/button/DialogButton';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import OrderPreview from '../../../../../Component/OrderPreview';
import ClientRoutes from '../../../../../constant/ClientRoutes';
import useClientString from '../../../../../hook/useClientString';
import useGoto from '../../../../../hook/useGoto';
import useApplyRefundFormDialog from './useApplyRefundFormDialog';
import useDeleteRejectedOrder from './useDeleteRejectedOrder';

const RejectedCard = ({ doc, id }) => {
  const S = useClientString();
  const applyRefund = useApplyRefundFormDialog(id);
  const deletedRejectedOrder = useDeleteRejectedOrder(id);
  const gotoOrderDetail = useGoto(`${ClientRoutes.ORDER_DETAIL}/${id}`);
  console.log(doc);
  return <SimpleCard onClick={gotoOrderDetail}>
    <OrderPreview order={doc} />
    <RowLayout>
      <Space />
      <DialogButton bg='red' onClick={deletedRejectedOrder}>{S.DELETE_WITHOUT_REFUND}</DialogButton>
      <DialogButton onClick={applyRefund}>{S.APPLY_FOR_REFUND}</DialogButton>
    </RowLayout>
  </SimpleCard>;
};

export default RejectedCard;