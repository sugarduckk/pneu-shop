import styled from 'styled-components';

const BottomContainer = styled.div`
  width: 100%;
  height: 60px;
  background: ${props => props.theme.color.primary};
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
  overflow: auto;
`;

export default BottomContainer;