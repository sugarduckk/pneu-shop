import React from 'react';
import styled from 'styled-components';
import Paging from './Paging';

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
  const current = React.useMemo(() => {
    return children.findIndex(element => {
      return element.props.show
    })
  }, [children])
  return <PagingLayoutParent>
    <PagingLayoutContainer {...otherProps} current={current} total={children.length}>
      {children}
    </PagingLayoutContainer>
  </PagingLayoutParent>;
};

export default PagingLayout;