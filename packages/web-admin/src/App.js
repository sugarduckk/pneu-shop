import React from 'react';
import { createGlobalStyle, ThemeProvider, DefaultTheme } from 'shared-lib/core';
import DialogScreen from 'shared-lib/screen/DialogScreen';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { useDispatch } from 'react-redux';
import { removeDialog } from 'shared-lib/redux/action';
import AppRoute from './AppRoute';
import useHandleUser from './hook/useHandleUser';
import useAuthEffect from 'firebase-wrapper/hook/useAuthEffect';
import useNoScroll from 'redux-wrapper/hook/useNoScroll';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Prompt', sans-serif;
    margin: 0;
    overflow: ${props => props.noScroll ? 'hidden' : 'auto'};
  }
`;

const App = props => {
  const dispatch = useDispatch();
  const { dialogs } = useGlobalState();
  const noScroll = useNoScroll();
  const handleUser = useHandleUser();
  useAuthEffect(handleUser);
  return <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle noScroll={noScroll} />
    <DialogScreen dialogs={dialogs} removeDialog={() => {
      dispatch(removeDialog());
    }} />
    <AppRoute />
  </ThemeProvider>;
};

export default App;