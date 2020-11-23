import styled from 'styled-components';

const TopAbsoluteLayout = styled.div`
  position: absolute;
  top: 0;
  height: 50%;
  background: linear-gradient(0deg, transparent 0%, black 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  color: white;
  padding: ${props => props.theme.dim.form.padding}px;
  text-align: center;
  box-sizing: border-box;
`;

export default TopAbsoluteLayout;