import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.color.background};
`;

const loadingspin = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  pointer-events: none;
  width: 2.5em;
  height: 2.5em;
  border: 0.4em solid transparent;
  border-color: #d6d6d6;
  border-top-color: ${props => props.theme.color.primary};
  border-radius: 50%;
  animation: ${loadingspin} 1s linear infinite;
`;

const LoadingScreen = ({ done, text }) => {
  return <LoadingContainer>
    {!done && <Loading />}
    {text && <div>{text}</div>}
  </LoadingContainer>;
};

export default LoadingScreen;