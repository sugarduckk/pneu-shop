import styled from 'styled-components';
import { Loading } from '../LoadingScreen';

const DialogLoading = styled(Loading)`
  margin: ${props => props.theme.dim.dialog.margin}px auto;
`;

export default DialogLoading;