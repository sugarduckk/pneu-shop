import styled from 'styled-components';
import DecoratorContainer from './DecoratorContainer';

const RightContainer = styled(DecoratorContainer)`
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export default RightContainer;