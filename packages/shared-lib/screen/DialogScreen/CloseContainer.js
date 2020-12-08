import styled from 'styled-components';

const CloseContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
  background: ${props => props.theme.color.background};
  width: ${props => props.theme.dim.nav.height - 2 * 10}px;
  height: ${props => props.theme.dim.nav.height - 2 * 10}px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: ${props => props.theme.dim.dialog.borderRadius}px;
  padding: ${props => props.theme.dim.dialog.closePadding}px;
  cursor: pointer;
`;

export default CloseContainer;