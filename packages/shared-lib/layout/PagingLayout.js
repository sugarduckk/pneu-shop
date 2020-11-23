import React from 'react';
import styled from 'styled-components';

const PagingLayoutParent = styled.div`
  overflow-x: hidden;
`;

const PagingLayoutContainer = styled.div`
  margin: 0;
  width: ${props => props.total * 100}%;
  min-height: calc(100vh - 2 * 60px);
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  transform: translate(${props => -1 * props.current * 100 / props.total}%, 0);
  transition: 0.2s;
`;

const PagingLayout = ({ children, ...otherProps }) => {
  return <PagingLayoutParent>
    <PagingLayoutContainer {...otherProps} total={children.length}>
      {children}
    </PagingLayoutContainer>
  </PagingLayoutParent>;
};

export default PagingLayout;