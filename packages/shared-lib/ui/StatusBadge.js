import React from 'react';
import styled from 'styled-components';
import useClientString from '../../web-client/src/hook/useClientString';
import OrderStatus from '../constant/OrderStatus';

const StatusBadgeContainer = styled.span`
  background: ${props => {
    switch (props.status) {
      case OrderStatus.PENDING_REVIEW.value:
        return props.theme.color.contrast;
      case OrderStatus.REJECTED.value:
        return 'maroon';
      case OrderStatus.ACCEPTED.value:
        return 'MediumBlue';
      case OrderStatus.DELIVERED.value:
        return 'purple';
      case OrderStatus.COMPLETED.value:
        return 'limegreen';
      default:
        return 'red';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case OrderStatus.PENDING_REVIEW.value:
        return 'white';
      default:
        return 'white';
    }
  }};
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
  padding: ${props => props.theme.dim.general.padding}px;
  width: fit-content;
`;

const StatusBadge = ({ status }) => {
  const S = useClientString();
  return <StatusBadgeContainer status={status}>
    {S[`ORDER_STATUS_${status}`]}
  </StatusBadgeContainer>;
};

export default StatusBadge;