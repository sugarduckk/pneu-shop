import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  max-width: 100%;
`;

export default Form;