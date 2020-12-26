import React from 'react';
import styled from 'styled-components';

const SquareLayoutContainer = styled.div`
  position: relative;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  padding-top: ${props => props.ratio ? `${100 / props.ratio}%` : '100%'};
  @media (min-width: ${props => props.theme.dim.phoneWidth}px) {
    padding-top: ${props => props.desktopRatio ? `${100 / props.desktopRatio}%` : '100%'};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SquareLayout = ({ children, ...otherProps }) => {
  return <SquareLayoutContainer {...otherProps}>
    <Content>
      {children}
    </Content>
  </SquareLayoutContainer>;
};

export default SquareLayout;

