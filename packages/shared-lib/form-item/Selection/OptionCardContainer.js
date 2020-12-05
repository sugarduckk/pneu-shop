import styled from 'styled-components';
import SimpleCard from '../../layout/SimpleCard';

const OptionCardContainer = styled(SimpleCard)`
  border: ${props => props.selected ? `2px solid ${props.theme.color.primary}` : '1px solid lightgrey'};
  cursor: pointer;
`;

export default OptionCardContainer;