import styled from 'styled-components';

const IndexContainer = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  color: grey;
  cursor: pointer;
  visibility: ${props => props.disabled ? 'hidden' : 'visible'};
`;

export default IndexContainer;