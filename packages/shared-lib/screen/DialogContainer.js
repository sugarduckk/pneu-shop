import styled from 'styled-components';

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  background: ${props => props.theme.color.background};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: ${props => props.theme.dim.dialog.borderRadius}px;
  width: 80vw;
  box-sizing: border-box;
  overflow: auto;
  max-height: 90vh;
  @media only screen and (min-width: 768px) {
    width: 40vw;
  }
  padding: ${props => props.theme.dim.dialog.padding}px;
`;

export default DialogContainer;