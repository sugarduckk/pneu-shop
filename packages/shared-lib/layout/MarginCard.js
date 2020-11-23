import styled from 'styled-components';
import CardContainer from './CardContainer';

const MarginCard = styled(CardContainer)`
  margin: ${props => props.theme.dim.form.margin}px;
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
`;

export default MarginCard;