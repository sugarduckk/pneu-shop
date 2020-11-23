import styled from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-gap: ${props => props.theme.dim.form.margin * 2}px;
  margin: ${props => props.theme.dim.form.margin}px;
`;

export default GridLayout;