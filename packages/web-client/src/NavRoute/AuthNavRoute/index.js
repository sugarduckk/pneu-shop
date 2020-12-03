import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavContainer } from 'shared-lib/layout';
import DashboardNavRoute from './DashboardNavRoute';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import VerificationNavRoute from './VerificationNavRoute';
import BaseNavRoute from '../NonAuthNavRoute/BaseNavRoute';
import ClientRoutes from '../../constant/ClientRoutes';

const AuthNavRoute = props => {
  const { user } = useGlobalState();
  if (!user.emailVerified) return <VerificationNavRoute />;
  return <NavContainer>
    <Switch>
      <Route exact path={ClientRoutes.HOME}>
        <DashboardNavRoute />
      </Route>
      <Route>
        <BaseNavRoute />
      </Route>
    </Switch>
  </NavContainer>;
};

export default AuthNavRoute;