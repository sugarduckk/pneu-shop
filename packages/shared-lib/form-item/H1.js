import styled from 'styled-components';

const H1 = styled.h1`
  margin: ${props => props.theme.dim.form.margin}px;
  color: ${props => props.theme.color.primaryText};
  text-align: center;
  //background: ${props => props.theme.color.contrast};
`;

export default H1;