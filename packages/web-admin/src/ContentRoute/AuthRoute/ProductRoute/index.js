import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminRoutes from '../../../constant/AdminRoutes';
import SearchProductRoute from './SearchProductRoute';
import EditProductRoute from './EditProductRoute';
import CreateNewProduct from './CreateNewProduct';

const ProductRoute = props => {
  return <Switch>
    <Route exact path={AdminRoutes.PRODUCT}>
      <SearchProductRoute />
    </Route>
    <Route exact path={`${AdminRoutes.PRODUCT}/create`}>
      <CreateNewProduct />
    </Route>
    <Route exact path={`${AdminRoutes.PRODUCT}/:productId`}>
      <EditProductRoute />
    </Route>
  </Switch>;
};

export default ProductRoute;