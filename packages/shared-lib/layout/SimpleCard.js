import styled from 'styled-components';
import CardContainer from './CardContainer';

const SimpleCard = styled(CardContainer)`
  background: white;
  padding: ${props => props.theme.dim.form.padding}px;
  margin: ${props => props.theme.dim.form.margin}px;
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
  align-items: center;
`;

export default SimpleCard;