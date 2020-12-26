import styled from 'styled-components';

const LabelContainer = styled.div`
  color: grey;
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${props => props.theme.dim.phoneWidth}px) {
    text-align: right;
  }
`;

export default LabelContainer;