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
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.5);
`;

export default NavContainer;