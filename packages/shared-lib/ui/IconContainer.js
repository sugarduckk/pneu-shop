import styled, { css } from 'styled-components';

const IconContainer = styled.div`
  width: ${props => props.theme.dim.nav.height * .7}px;
  height: ${props => props.theme.dim.nav.height}px;
  box-sizing: border-box;
  padding: ${props => props.theme.dim.nav.height * .26}px 0;
  cursor: pointer;
  ${props => props.disabled && css`
    pointer-events: none;
    opacity: 0.4;
  `}
  ${props => props.square && css`
    width: ${props => props.theme.dim.nav.height}px;
    padding: ${props => props.theme.dim.nav.height * .26}px;
  `}
`;

export default IconContainer;