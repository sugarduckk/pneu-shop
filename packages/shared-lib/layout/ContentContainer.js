import styled from 'styled-components';

const ContentContainer = styled.div`
  margin: auto;
  width: 100%;
  min-height: ${props => props.hasBottomBar ? 'calc(100vh - 2 * 60px)' : 'calc(100vh - 60px)'};
  overflow: auto;
  @media (min-width: ${props => props.theme.dim.phoneWidth}px) {
    width: 60%;
  }
  padding: ${props => props.theme.dim.dialog.padding}px;
  box-sizing: border-box;
`;

export default ContentContainer;