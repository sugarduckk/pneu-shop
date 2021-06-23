import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useRemoveDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useNoScroll from 'redux-wrapper/hook/useNoScroll';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'shared-lib/core';
import DialogScreen from 'shared-lib/screen/DialogScreen';
import FetchCart from './Component/FetchCart';
import AppRoute from './AppRoute';
import ActionRoute from './ActionRoute';
import useScreenSize from 'redux-wrapper/hook/useScreenSize';
import AppSetUp from './AppSetUp';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Prompt', sans-serif;
    margin: 0;
    overflow: ${props => props.noScroll ? 'hidden' : 'auto'};
  }
`;

const App = props => {
  const removeDialog = useRemoveDialog();
  const { dialogs } = useGlobalState();
  const noScroll = useNoScroll();
  return <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle noScroll={noScroll} />
    <BrowserRouter>
      <FetchCart />
      <DialogScreen dialogs={dialogs} removeDialog={removeDialog} />
      <Switch>
        <Route exact path='/action'>
          <ActionRoute />
        </Route>
        <Route>
          <AppRoute />
        </Route>
      </Switch>
      <AppSetUp />
    </BrowserRouter>
  </ThemeProvider>;
};

export default App;