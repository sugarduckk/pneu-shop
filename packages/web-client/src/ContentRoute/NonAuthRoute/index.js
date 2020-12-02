import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClientRoutes from '../../constant/ClientRoutes';
import IntroRoute from '../CommonRoute/IntroRoute';
import AboutUsRoute from './AboutUsRoute';
import ContactRoute from './ContactRoute';
import LoginRoute from './LoginRoute';
import ProductDetailRoute from './ProductDetailRoute';
import RegisterRoute from './RegisterRoute';
import SearchRoute from './SearchRoute';

const NonAuthRoute = props => {
  return <Switch>
    <Route exact path={ClientRoutes.HOME}>
      <IntroRoute />
    </Route>
    <Route exact path={ClientRoutes.SEARCH}>
      <SearchRoute />
    </Route>
    <Route exact path={ClientRoutes.ABOUTUS}>
      <AboutUsRoute />
    </Route>
    <Route exact path={ClientRoutes.CONTACT}>
      <ContactRoute />
    </Route>
    <Route exact path='/login'>
      <LoginRoute />
    </Route>
    <Route exact path='/register'>
      <RegisterRoute />
    </Route>
    <Route exact path={`${ClientRoutes.PRODUCT}/:productId`}>
      <ProductDetailRoute />
    </Route>
    <Route>
      <Redirect to='/' />
    </Route>
  </Switch>;
};

export default NonAuthRoute;