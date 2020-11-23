import styled from 'styled-components';

const BottomAbsoluteLayout = styled.div`
  position: absolute;
  bottom: 0;
  height: 50%;
  background: linear-gradient(0deg, black 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  color: white;
  padding: ${props => props.theme.dim.form.padding}px;
  text-align: center;
  box-sizing: border-box;
`;

export default BottomAbsoluteLayout;