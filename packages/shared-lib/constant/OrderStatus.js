const OrderStatus = {
  PENDING_REVIEW: {
    value: 'PENDING_REVIEW',
    count: 'nPendingReviewOrders',
    label: 'Pending Review',
    route: 'pendingReview'
  },
  ACCEPTED: {
    value: 'ACCEPTED',
    count: 'nAcceptedOrders',
    label: 'Accepted',
    route: 'accepted'
  },
  REJECTED: {
    value: 'REJECTED',
    count: 'nRejectedOrders',
    label: 'Rejected',
    route: 'rejected'
  },
  DELIVERED: {
    value: 'DELIVERED',
    count: 'nDeliveredOrders',
    label: 'Delivered',
    route: 'delivered'
  },
  COMPLETED: {
    value: 'COMPLETED',
    count: 'nCompletedOrders',
    label: 'Completed',
    route: 'completed'
  },
  DELETED: {
    value: 'DELETED',
    count: 'nDeletedOrders',
    label: 'Deleted',
    route: 'deleted'
  },
  PENDING_REFUND: {
    value: 'PENDING_REFUND',
    count: 'nPendingRefundOrders',
    label: 'Pending Refund',
    route: 'pendingRefund'
  },
  REFUNDED: {
    value: 'REFUNDED',
    count: 'nRefundedOrders',
    label: 'Refunded',
    route: 'refunded'
  },
  REFUND_REJECTED: {
    value: 'REFUND_REJECTED',
    count: 'nRefundRejectedOrders',
    label: 'Refund Rejected',
    route: 'refundRejected'
  }
};

export default OrderStatus;