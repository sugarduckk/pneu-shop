import styled from 'styled-components';

const CarouselInside = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: ${props => props.n * 100}%;
  position: absolute;
  left: -${props => props.current * 100}%;
  transition: left 0.2s;
`;

export default CarouselInside;