import styled from 'styled-components';

const ResponsiveFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin: ${props => props.theme.dim.form.margin}px;
  border-radius: ${props => props.theme.dim.button.borderRadius}px;
  align-items: center;
  @media (min-width: ${props => props.theme.dim.phoneWidth}px) {
    flex-direction: row;
  }
`;

export default ResponsiveFlexbox;