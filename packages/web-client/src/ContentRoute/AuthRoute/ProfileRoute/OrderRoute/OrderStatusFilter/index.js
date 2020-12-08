import React from 'react';
import { useSetState } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import DialogSelection from 'shared-lib/form-item/DialogSelection';
import OrderStatus from '../../../../../constant/OrderStatus';

const OrderStatusFilter = props => {
  const { currentOrderStatus } = useGlobalState();
  const setState = useSetState();
  const handleChange = React.useCallback((key, value) => {
    setState({
      currentOrderStatus: value
    });
  }, [setState]);
  return <DialogSelection value={currentOrderStatus} name='currentOrderStatus' label='Filter Order Status' handleChange={handleChange}
    options={Object.values(OrderStatus).map(s => {
      return {
        label: s,
        value: s
      };
    })} />;
};

export default OrderStatusFilter;