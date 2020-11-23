import React from 'react';
import useGlobalState from "redux-wrapper/hook/useGlobalState";
import LoadingScreen from "shared-lib/screen/LoadingScreen";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "shared-lib/layout";
import NavRoute from './NavRoute';
import ContentRoute from './ContentRoute';

const AppRoute = props => {
  const { userLoaded } = useGlobalState();
  if (!userLoaded) return <LoadingScreen text='Authenticating' />;
  return <BrowserRouter>
    <AppContainer>
      <NavRoute />
      <ContentRoute />
    </AppContainer>
  </BrowserRouter>;
};

export default AppRoute;