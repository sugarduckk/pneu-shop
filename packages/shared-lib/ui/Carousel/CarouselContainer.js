import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: ${props => props.theme.dim.form.borderRadius}px;
  box-sizing: border-box;
  overflow: hidden;
`;

export default CarouselContainer;