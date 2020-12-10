import styled from 'styled-components';

const SelectedButton = styled.div`
  position: relative;
  padding: 0.75em;
  border: 1px solid lightgrey;
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
  font-family: inherit;
  &:disabled {
    opacity: 0.4;
  }
  width: ${props => props.width || 'auto'};
  background: white;
  cursor: pointer;
`;

export default SelectedButton;