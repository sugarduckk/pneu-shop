import styled from 'styled-components';

const CartPreviewContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: auto;
  column-gap: ${props => 2 * props.theme.dim.general.margin}px;
`;

export default CartPreviewContainer;