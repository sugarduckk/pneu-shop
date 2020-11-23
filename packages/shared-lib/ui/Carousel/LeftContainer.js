import styled from 'styled-components';
import DecoratorContainer from './DecoratorContainer';

const LeftContainer = styled(DecoratorContainer)`
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export default LeftContainer;