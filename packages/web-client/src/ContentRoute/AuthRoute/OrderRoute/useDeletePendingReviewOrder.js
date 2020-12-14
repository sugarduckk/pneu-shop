import useUpdateOrderStatus from 'firebase-wrapper/firestore/useUpdateOrderStatus';
import useConfirm from 'redux-wrapper/hook/useConfrim';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import OrderStatus from 'shared-lib/constant/OrderStatus';

const useDeletePendingReviewOrder = (orderId) => {
  const { user } = useGlobalState();
  const updatePendingReviewToDeleted = useUpdateOrderStatus(user.uid, orderId, OrderStatus.PENDING_REVIEW, OrderStatus.DELETED);
  return useConfirm(updatePendingReviewToDeleted, 'Are you sure to delete this order?', 'Order deleted!')
};

export default useDeletePendingReviewOrder;