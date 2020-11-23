import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeNavRoute from './HomeNavRoute';
import LoginNavRoute from './LoginNavRoute';
import RegisterNavRoute from './RegisterNavRoute';
import { NavContainer } from 'shared-lib/layout';
import BaseNavRoute from './BaseNavRoute';

const NonAuthNavRoute = props => {
  return <NavContainer>
    <Switch>
      <Route exact path='/'>
        <HomeNavRoute />
      </Route>
      <Route exact path='/login'>
        <LoginNavRoute />
      </Route>
      <Route exact path='/register'>
        <RegisterNavRoute />
      </Route>
      <Route>
        <BaseNavRoute />
      </Route>
    </Switch>
  </NavContainer>;
};

export default NonAuthNavRoute;