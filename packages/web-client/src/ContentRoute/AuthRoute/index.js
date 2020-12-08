import useOrdersQuery from 'firebase-wrapper/firestore/query/useOrdersQuery';
import useCollection from 'firebase-wrapper/firestore/useCollection';
import useUserDoc from 'firebase-wrapper/firestore/useUserDoc';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSetState } from 'redux-wrapper/action';
import FetchCollection from 'redux-wrapper/component/FetchCollection';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import ClientRoutes from '../../constant/ClientRoutes';
import IntroRoute from '../CommonRoute/IntroRoute';
import AboutUsRoute from '../NonAuthRoute/AboutUsRoute';
import ContactRoute from '../NonAuthRoute/ContactRoute';
import ProductDetailRoute from '../NonAuthRoute/ProductDetailRoute';
import SearchRoute from '../NonAuthRoute/SearchRoute';
import CheckoutRoute from './CheckoutRoute';
import LoadingContent from './LoadingContent';
import ProfileRoute from './ProfileRoute';
import SettingRoute from './SettingRoute';
import VerificationRoute from './VerificationRoute';

const AuthRoute = props => {
  const { user, userDoc, addresses, currentOrderStatus } = useGlobalState();
  const ordersQuery = useOrdersQuery(user.uid, currentOrderStatus);
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
    <FetchCollection collectionName='orders' query={ordersQuery} limit={5} />
    <Switch>
      <Route exact path={ClientRoutes.HOME}>
        <IntroRoute />
      </Route>
      <Route exact path={`${ClientRoutes.PROFILE}/:subProfile`}>
        <ProfileRoute />
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