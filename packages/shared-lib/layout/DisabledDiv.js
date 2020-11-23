import styled from 'styled-components';

const DisabledDiv = styled.div`
  opacity: ${props => props.disabled ? '0.4' : '1'};
`;

export default DisabledDiv;