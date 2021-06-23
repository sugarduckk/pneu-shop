import styled from 'styled-components';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: pre-wrap;
  ${props => props.color && `color: ${props.color};`}
`;

export default TextContainer;