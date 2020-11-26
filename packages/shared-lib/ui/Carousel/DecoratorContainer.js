import styled from 'styled-components';

const DecoratorContainer = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  color: grey;
  cursor: pointer;
  visibility: ${props => props.disabled ? 'hidden' : 'visible'};
`;

export default DecoratorContainer;