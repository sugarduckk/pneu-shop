import styled from 'styled-components';

const DimBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.9);
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? '1' : '0'};
  z-index: 3;
  transition: .2s;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
`;

export default DimBackground;