import styled from 'styled-components';
import SimpleCard from '../../layout/SimpleCard';

const OptionCardContainer = styled(SimpleCard)`
  border: 1px solid lightgrey;
  background: ${props => props.selected ? 'lightgrey' : 'white'};
  cursor: pointer;
  box-sizing: border-box;
`;

export default OptionCardContainer;