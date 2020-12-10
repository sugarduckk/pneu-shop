import useOrdersQuery from 'firebase-wrapper/firestore/query/useOrdersQuery';
import useCollection from 'firebase-wrapper/firestore/useCollection';
import useUserDoc from 'firebase-wrapper/firestore/useUserDoc';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSetState } from 'redux-wrapper/action';
import FetchCollection from 'redux-wrapper/component/FetchCollection';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import ClientRoutes from '../../constant/ClientRoutes';
import OrderStatus from '../../constant/OrderStatus';
import IntroRoute from '../CommonRoute/IntroRoute';
import AboutUsRoute from '../NonAuthRoute/AboutUsRoute';
import ContactRoute from '../NonAuthRoute/ContactRoute';
import ProductDetailRoute from '../NonAuthRoute/ProductDetailRoute';
import SearchRoute from '../NonAuthRoute/SearchRoute';
import AddressRoute from './AddressRoute';
import CheckoutRoute from './CheckoutRoute';
import LoadingContent from './LoadingContent';
import OrderRoute from './OrderRoute';
import SettingRoute from './SettingRoute';
import VerificationRoute from './VerificationRoute';

const AuthRoute = props => {
  const { user, userDoc, addresses } = useGlobalState();
  const pendingReviewOrdersQuery = useOrdersQuery(user.uid, OrderStatus.PENDING_REVIEW);
  const acceptedOrdersQuery = useOrdersQuery(user.uid, OrderStatus.ACCEPTED);
  const deliveredOrdersQuery = useOrdersQuery(user.uid, OrderStatus.DELIVERED);
  const completedOrdersQuery = useOrdersQuery(user.uid, OrderStatus.COMPLETED);
  const deletedOrdersQuery = useOrdersQuery(user.uid, OrderStatus.DELETED);
  const setState = useSetState();
  const handleUserDoc = React.useCallback(userDoc => {
    setState({ userDoc });
  }, [setState]);
  useUserDoc(user.uid, handleUserDoc);
  const handleAddresses = React.useCallback(docs => {
    setState({
      addresses: docs.map(doc => doc.data())
    });
  }, [setState]);
  useCollection(`users/${user.uid}/addresses`, handleAddresses);
  if (!(userDoc && addresses)) return <LoadingContent />;
  if (!user.emailVerified) return <VerificationRoute />;
  return <>
    <FetchCollection collectionName='pendingReviewOrders' query={pendingReviewOrdersQuery} limit={5} />
    <FetchCollection collectionName='acceptedOrders' query={acceptedOrdersQuery} limit={5} />
    <FetchCollection collectionName='deliveredOrders' query={deliveredOrdersQuery} limit={5} />
    <FetchCollection collectionName='completedOrders' query={completedOrdersQuery} limit={5} />
    <FetchCollection collectionName='deletedOrders' query={deletedOrdersQuery} limit={5} />
    <Switch>
      <Route exact path={ClientRoutes.HOME}>
        <IntroRoute />
      </Route>
      <Route exact path={`${ClientRoutes.ORDER}/:orderStatus`}>
        <OrderRoute />
      </Route>
      <Route exact path={ClientRoutes.ADDRESS}>
        <AddressRoute />
      </Route>
      <Route exact path={ClientRoutes.CHECKOUT}>
        <CheckoutRoute />
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
      <Route exact path={`${ClientRoutes.PRODUCT}/:productId`}>
        <ProductDetailRoute />
      </Route>
      <Route exact path='/setting'>
        <SettingRoute />
      </Route>
      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  </>;
};

export default AuthRoute;