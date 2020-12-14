import useUpdateOrderStatus from 'firebase-wrapper/firestore/useUpdateOrderStatus';
import useConfirm from 'redux-wrapper/hook/useConfrim';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import OrderStatus from 'shared-lib/constant/OrderStatus';

const useDeleteRejectedOrder = (orderId) => {
  const { user } = useGlobalState();
  const updatePendingReviewToDeleted = useUpdateOrderStatus(user.uid, orderId, OrderStatus.REJECTED, OrderStatus.DELETED);
  return useConfirm(updatePendingReviewToDeleted, 'Are you sure to delete this rejected order?', 'Rejected order deleted!')
};

export default useDeleteRejectedOrder;