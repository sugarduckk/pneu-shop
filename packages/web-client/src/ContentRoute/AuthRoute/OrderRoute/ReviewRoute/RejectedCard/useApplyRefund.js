import useUpdateOrderStatus from 'firebase-wrapper/firestore/useUpdateOrderStatus';
import useConfirm from 'redux-wrapper/hook/useConfrim';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import ClientRoutes from '../../../../../constant/ClientRoutes';
import useGoto from '../../../../../hook/useGoto';

const useApplyRefund = (orderId) => {
  const { user } = useGlobalState();
  const applyRefund = useUpdateOrderStatus(user.uid, orderId, OrderStatus.REJECTED.value, OrderStatus.PENDING_REFUND.value);
  const gotoRefund = useGoto(ClientRoutes.PENDING_REFUND)
  return useConfirm(applyRefund, 'Are you sure to refund the payment for this order?', 'Order is pending refund!', gotoRefund)
};

export default useApplyRefund;