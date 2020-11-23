import styled from 'styled-components';

const InsideContainer = styled.div`
  padding: ${props => props.theme.dim.form.margin}px;
  border: 1px solid lightgrey;
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
  font-family: inherit;
  &:disabled {
    opacity: 0.4;
  }
  background: white;
`;

export default InsideContainer;