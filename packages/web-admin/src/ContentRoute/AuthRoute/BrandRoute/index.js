import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminRoutes from '../../../constant/AdminRoutes';
import ManageBrandRoute from './ManageBrandRoute';
import EditBrandRoute from './EditBrandRoute';

const BrandRoute = props => {
  return <Switch>
    <Route exact path={AdminRoutes.BRAND}>
      <ManageBrandRoute />
    </Route>
    <Route exact path={`${AdminRoutes.BRAND}/:brandId`}>
      <EditBrandRoute />
    </Route>
  </Switch>;
};

export default BrandRoute;