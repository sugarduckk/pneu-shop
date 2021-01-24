import styled from 'styled-components';

const ProductDetailContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  padding: ${props => props.theme.dim.general.padding}px;
  grid-gap: ${props => props.theme.dim.general.margin}px;
  @media (min-width: ${props => props.theme.dim.phoneWidth}px) {
    grid-template-columns: auto 1fr;
  }
  box-sizing: border-box;
`;

export default ProductDetailContainer;