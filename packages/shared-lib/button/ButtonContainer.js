import styled from 'styled-components';

const ButtonContainer = styled.button`
  margin: ${props => props.theme.dim.form.margin}px;
  padding: 0.7em;
  border: none;
  border-radius: ${props => props.theme.dim.button.borderRadius}px;
  font-family: inherit;
  &:disabled {
    opacity: 0.4;
  }
  background: ${props => {
    switch (props.bg) {
      case 'red':
        return 'red';
      default:
        return props.bg || props.theme.color.primary;
    }
  }};
  color: ${props => props.color || 'white'};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default ButtonContainer;