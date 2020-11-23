import styled from 'styled-components';

const FormItemErrorMessage = styled.div`
  margin: ${props => props.theme.dim.form.margin}px;
  margin-top: 0;
  color: ${props => props.theme.color.errorMessage};
  white-space: pre-wrap;
`;

export default FormItemErrorMessage;