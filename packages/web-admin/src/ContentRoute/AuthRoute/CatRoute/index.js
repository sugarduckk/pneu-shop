import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminRoutes from '../../../constant/AdminRoutes';
import ManageCategoryRoute from './ManageCategoryRoute';
import EditCatRoute from './EditCatRoute';

const CatRoute = props => {
  return <Switch>
    <Route exact path={AdminRoutes.CAT}>
      <ManageCategoryRoute />
    </Route>
    <Route exact path={`${AdminRoutes.CAT}/:catId`}>
      <EditCatRoute />
    </Route>
  </Switch>;
};

export default CatRoute;