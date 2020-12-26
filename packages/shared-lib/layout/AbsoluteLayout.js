import styled from 'styled-components';

const AbsoluteLayout = styled.div`
  position: absolute;
  margin: ${props => props.theme.dim.general.margin}px;
`;

export const TopRightLayout = styled(AbsoluteLayout)`
  top: 0;
  right: 0;
`;

export const BottomRightLayout = styled(AbsoluteLayout)`
  bottom: 0;
  right: 0;
`;

export default AbsoluteLayout;