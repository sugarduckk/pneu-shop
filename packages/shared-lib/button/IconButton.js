import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  margin-right: 0.5em;
  vertical-align: middle;
`;

const IconButton = ({ children, icon, ...otherProps }) => {
  return <Button {...otherProps}>
    <IconContainer>{icon}</IconContainer>
    <span>{children}</span>
  </Button>;
};

export default IconButton;