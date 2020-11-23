import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: ${props => props.theme.dim.nav.height}px;
  background: ${props => props.theme.color.primary};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 2;
`;

export default NavContainer;