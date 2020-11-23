import styled from 'styled-components';
import DecoratorContainer from './DecoratorContainer';

const CenterButtonContainer = styled(DecoratorContainer)`
  top: auto;
  left: 50%;
  right: auto;
  bottom: 0;
  width: auto;
  transform: translateX(-50%);
  height: auto;
  min-height: 2rem;
  padding: 0 0.5rem;
  font-size: 0.8em;
`;

export default CenterButtonContainer;