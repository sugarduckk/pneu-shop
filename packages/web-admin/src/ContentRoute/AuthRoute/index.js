import useRolesQuery from 'firebase-wrapper/firestore/query/useRolesQuery';
import useCollection from 'firebase-wrapper/firestore/useCollection';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSetState } from 'redux-wrapper/action';
import FetchCollection from 'redux-wrapper/component/FetchCollection';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import LoadingContent from '../../../../web-client/src/ContentRoute/AuthRoute/LoadingContent';
import AdminRoutes from '../../constant/AdminRoutes';
import BrandRoute from './BrandRoute';
import CatRoute from './CatRoute';
import DashboardRoute from './DashboardRoute';
import InterfaceRoute from './InterfaceRoute';
import ProductRoute from './ProductRoute';
import SettingRoute from './SettingRoute';
import UserRoute from './UserRoute';

const AuthRoute = props => {
  const { cats, brands, config } = useGlobalState();
  const rolesQuery = useRolesQuery();
  const setState = useSetState();
  // fetch categories
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
  if (!cats || !brands || !config) return <LoadingContent />;
  return <>
    <FetchCollection collectionName='roles' query={rolesQuery} limit={5} />
    <Switch>
      <Route exact path='/'>
        <DashboardRoute />
      </Route>
      <Route path={AdminRoutes.PRODUCT}>
        <ProductRoute />
      </Route>
      <Route path={AdminRoutes.USER}>
        <UserRoute />
      </Route>
      <Route path={AdminRoutes.BRAND}>
        <BrandRoute />
      </Route>
      <Route path={AdminRoutes.CAT}>
        <CatRoute />
      </Route>
      <Route path={AdminRoutes.SETTING}>
        <SettingRoute />
      </Route>
      <Route path={AdminRoutes.INTERFACE}>
        <InterfaceRoute />
      </Route>
      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  </>;
};

export default AuthRoute;