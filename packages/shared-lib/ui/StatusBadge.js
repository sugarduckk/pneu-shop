import React from 'react';
import styled from 'styled-components';
import useClientString from '../../web-client/src/hook/useClientString';

const StatusBadgeContainer = styled.span`
  background: red;
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
  padding: ${props => props.theme.dim.general.padding}px;
  width: fit-content;
  color: white;
`;

const StatusBadge = ({ status }) => {
  const S = useClientString();
  return <StatusBadgeContainer>
    {S[`ORDER_STATUS_${status}`]}
  </StatusBadgeContainer>;
};

export default StatusBadge;