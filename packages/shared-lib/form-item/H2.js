import styled from 'styled-components';

const H2 = styled.h2`
  margin: ${props => props.theme.dim.form.margin}px;
  color: ${props => props.theme.color.primaryText};
`;

export default H2;