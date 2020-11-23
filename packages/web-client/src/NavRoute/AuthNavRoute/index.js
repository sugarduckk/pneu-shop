import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavContainer } from 'shared-lib/layout';
import DashboardNavRoute from './DashboardNavRoute';
import SettingNavRoute from './SettingNavRoute';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import VerificationNavRoute from './VerificationNavRoute';

const AuthNavRoute = props => {
  const { user } = useGlobalState();
  if (!user.emailVerified) return <VerificationNavRoute />;
  return <NavContainer>
    <Switch>
      <Route exact path='/'>
        <DashboardNavRoute />
      </Route>
      <Route exact path='/setting'>
        <SettingNavRoute />
      </Route>
    </Switch>
  </NavContainer>;
};

export default AuthNavRoute;