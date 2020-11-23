import styled from 'styled-components';

const RoundedLayout = styled.div`
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
  overflow: hidden;
  cursor: pointer;
`;

export default RoundedLayout;