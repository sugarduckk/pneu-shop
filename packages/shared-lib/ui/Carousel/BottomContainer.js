import styled from 'styled-components'
import DecoratorContainer from './DecoratorContainer'

const BottomContainer = styled(DecoratorContainer)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
`

export default BottomContainer