import React from 'react';
import DialogButton from 'shared-lib/button/DialogButton';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import OrderPreview from '../../../../../Component/OrderPreview';
import useClientString from '../../../../../hook/useClientString';
import useApplyRefund from './useApplyRefund';
import useDeleteRejectedOrder from './useDeleteRejectedOrder';

const RejectedCard = ({ doc, id }) => {
  const S = useClientString();
  const applyRefund = useApplyRefund(id);
  const deletedRejectedOrder = useDeleteRejectedOrder(id);
  return <SimpleCard>
    <OrderPreview order={doc} />
    <RowLayout>
      <Space />
      <DialogButton bg='red' onClick={deletedRejectedOrder}>{S.DELETE_WITHOUT_REFUND}</DialogButton>
      <DialogButton onClick={applyRefund}>{S.APPLY_FOR_REFUND}</DialogButton>
    </RowLayout>
  </SimpleCard>;
};

export default RejectedCard;