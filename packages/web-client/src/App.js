import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useRemoveDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'shared-lib/core';
import DialogScreen from 'shared-lib/screen/DialogScreen';
import ShoppingCartDialog from 'shared-lib/screen/ShoppingCartDialog';
import ActionRoute from './ActionRoute';
import AppRoute from './AppRoute';
import useCheckout from './hook/useCheckout';
import useHideCart from './hook/useHideCart';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Prompt', sans-serif;
    margin: 0;
  }
`;

const App = props => {
  const removeDialog = useRemoveDialog();
  const { dialogs, cart, showCart } = useGlobalState();
  const hideCart = useHideCart();
  return <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    <BrowserRouter>
      <ShoppingCartDialog cart={cart} showCart={showCart} hideCart={hideCart} />
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