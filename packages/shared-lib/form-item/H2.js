import styled from 'styled-components';

const H2 = styled.h2`
  margin: 0;
  padding: ${props => props.theme.dim.form.padding}px;
  color: ${props => props.theme.color.primaryText};
  text-align: center;
`;

export default H2;