import React from 'react';
import { NavContainer } from 'shared-lib/layout';
import { Switch, Route } from 'react-router-dom';
import CreateNewUserNavRoute from './CreateNewUserNavRoute';
import ManageUserNavRoute from './ManageUserNavRoute';
import DashboardNavRoute from './DashboardNavRoute';
import CreateNewProductNavRoute from './CreateNewProductNavRoute';
import ManageProductNavRoute from './ManageProductNavRoute';
import GoHomeNavRoute from './GoHomeNavRoute';
import AdminRoutes from '../../constant/AdminRoutes';

const AuthNavRoute = props => {
  return <NavContainer>
    <Switch>
      <Route exact path='/'>
        <DashboardNavRoute />
      </Route>
      <Route exact path='/create_new_user'>
        <CreateNewUserNavRoute />
      </Route>
      <Route exact path={AdminRoutes.USER}>
        <ManageUserNavRoute />
      </Route>
      <Route exact path='/create_new_product'>
        <CreateNewProductNavRoute />
      </Route>
      <Route exact path={AdminRoutes.PRODUCT}>
        <ManageProductNavRoute />
      </Route>
      <Route exact path='/manage_brand'>
        <GoHomeNavRoute />
      </Route>
      <Route exact path='/search_product'>
        <GoHomeNavRoute />
      </Route>
      <Route>
        <GoHomeNavRoute />
      </Route>
    </Switch>
  </NavContainer>;
};

export default AuthNavRoute;