import styled from 'styled-components';

const Para = styled.p`
  margin: ${props => props.theme.dim.form.margin}px;
  color: ${props => props.theme.color.paraText};
  text-align: center;
`;

export default Para;