import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminRoutes from '../../../constant/AdminRoutes';
import ManageUserRoute from './ManageUserRoute';
import CreateNewUserRoute from './CreateNewUserRoute';

const UserRoute = props => {
  return <Switch>
    <Route exact path={AdminRoutes.USER}>
      <ManageUserRoute />
    </Route>
    <Route exact path={`${AdminRoutes.USER}/create`}>
      <CreateNewUserRoute />
    </Route>
  </Switch>;
};

export default UserRoute;