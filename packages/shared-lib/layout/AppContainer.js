import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.color.background};
  position: relative;
`;

export default AppContainer;