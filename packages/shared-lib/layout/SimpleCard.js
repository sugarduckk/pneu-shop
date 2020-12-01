import styled from 'styled-components';
import CardContainer from './CardContainer';

const SimpleCard = styled(CardContainer)`
  background: ${props => props.bg || 'white'};
  padding: ${props => props.theme.dim.form.padding}px;
  margin: ${props => props.theme.dim.form.margin}px;
  border: 1px solid lightgrey;
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
  align-items: center;
  box-sizing: border-box;
  flex: ${props => props.flex};
`;

export default SimpleCard;