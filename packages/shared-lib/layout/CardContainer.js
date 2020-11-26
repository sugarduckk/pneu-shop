import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: center;
`;

export default CardContainer;