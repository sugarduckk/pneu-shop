import styled from 'styled-components';

const Paging = styled.div`
  flex: 1;
  overflow: auto;
  box-sizing: border-box;
  width: 100vw;
  padding: ${props => props.theme.dim.dialog.padding}px;
  @media (min-width: ${props => props.theme.dim.phoneWidth}px) {
    padding: ${props => props.theme.dim.dialog.padding}px 20vw;
  }
  height: ${props => props.show ? 'auto' : 'calc(100vh - 2 * 60px)'};
`;

export default Paging;