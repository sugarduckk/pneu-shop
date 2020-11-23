import styled from 'styled-components';

const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.dim.form.margin}px;
  flex: 1;
`;

export default FormItemContainer;