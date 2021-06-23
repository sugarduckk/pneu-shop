import useCollection from 'firebase-wrapper/firestore/useCollection';
import useAuthEffect from 'firebase-wrapper/hook/useAuthEffect';
import React from 'react';
import { useSetState } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { AppContainer } from 'shared-lib/layout';
import LoadingScreen from 'shared-lib/screen/LoadingScreen';
import ContentRoute from './ContentRoute';
import useHandleUser from './hook/useHandleUser';
import useScrollToTop from './hook/useScrollToTop';
import NavRoute from './NavRoute';

const AppRoute = props => {
  const { userLoaded, cats, brands, config } = useGlobalState();
  const setState = useSetState();
  const handleUser = useHandleUser();
  useAuthEffect(handleUser);
  useScrollToTop();
  // fetch cats
  const handleCats = React.useCallback(docs => {
    setState({
      cats: docs.map(doc => doc.data())
    });
  }, [setState]);
  useCollection('cats', handleCats);
  // fetch brands
  const handleBrands = React.useCallback(docs => {
    setState({
      brands: docs.map(doc => doc.data())
    });
  }, [setState]);
  useCollection('brands', handleBrands);
  // fetch config
  const handleConfig = React.useCallback(docs => {
    const config = {};
    docs.forEach(doc => {
      config[doc.id] = doc.data();
    });
    setState({
      config
    });
  }, [setState]);
  useCollection('config', handleConfig);
  if (!userLoaded) return <LoadingScreen text='Authenticating' />;
  if (!(cats && brands && config)) return <LoadingScreen text='Loading data' />;
  return <AppContainer>
    <NavRoute />
    <ContentRoute />
  </AppContainer>;
};

export default AppRoute;