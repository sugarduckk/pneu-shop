import { BrowserRouter } from "react-router-dom";
import useGlobalState from "redux-wrapper/hook/useGlobalState";
import { AppContainer } from "shared-lib/layout";
import LoadingScreen from "shared-lib/screen/LoadingScreen";
import ContentRoute from './ContentRoute';
import NavRoute from './NavRoute';

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