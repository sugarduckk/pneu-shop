import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useRemoveDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'shared-lib/core';
import DialogScreen from 'shared-lib/screen/DialogScreen';
import ActionRoute from './ActionRoute';
import AppRoute from './AppRoute';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Prompt', sans-serif;
    margin: 0;
  }
`;

const App = props => {
  const removeDialog = useRemoveDialog();
  const { dialogs } = useGlobalState();
  return <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    <BrowserRouter>
      <DialogScreen dialogs={dialogs} removeDialog={removeDialog} />
      <Switch>
        <Route exact path='/action'>
          <ActionRoute />
        </Route>
        <Route>
          <AppRoute />
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>;
};

export default App;