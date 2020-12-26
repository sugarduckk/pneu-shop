import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const BottomTabButton = styled(Button)`
  margin: 0;
  background: transparent;
  flex: 1;
  border-radius: 0;
`;

const IconContainer = styled.div`
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  margin: 0 0.5em;
  vertical-align: middle;
`;

const Span = styled.span`
  white-space: pre;
`;

const BottomTab = ({ children, icon, ...otherProps }) => {
  return <BottomTabButton {...otherProps}>
    {icon && <IconContainer>{icon}</IconContainer>}
    <Span>{children}</Span>
  </BottomTabButton>;
};

export default BottomTab;