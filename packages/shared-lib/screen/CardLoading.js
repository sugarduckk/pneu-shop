import styled, { keyframes } from 'styled-components';

const bgPosition = keyframes`
  0% {
    background-position: 0 0, 0 0;
  }
  50% {
    background-position: 100% 0, 0 0;
  }
  100% {
    background-position: 0 0, 0 0;
  }
`;

const CardLoading = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, lightgrey);
  background-size: 200%;
  background-position: 0 0;
  background-repeat: no-repeat;
  animation: ${bgPosition} 1s ease infinite;
`;

export default CardLoading;