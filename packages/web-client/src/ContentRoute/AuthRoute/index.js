import useOrdersQuery from 'firebase-wrapper/firestore/query/useOrdersQuery';
import useCollection from 'firebase-wrapper/firestore/useCollection';
import useUserDoc from 'firebase-wrapper/firestore/useUserDoc';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSetState } from 'redux-wrapper/action';
import FetchCollection from 'redux-wrapper/component/FetchCollection';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import ClientRoutes from '../../constant/ClientRoutes';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import IntroRoute from '../CommonRoute/IntroRoute';
import AboutUsRoute from '../CommonRoute/AboutUsRoute';
import ContactRoute from '../NonAuthRoute/ContactRoute';
import ProductDetailRoute from '../NonAuthRoute/ProductDetailRoute';
import SearchRoute from '../NonAuthRoute/SearchRoute';
import AddressRoute from './AddressRoute';
import CheckoutRoute from './CheckoutRoute';
import LoadingContent from './LoadingContent';
import OrderRoute from './OrderRoute';
import SettingRoute from './SettingRoute';
import VerificationRoute from './VerificationRoute';
import useOrdersArrayQuery from 'firebase-wrapper/firestore/query/useOrdersArrayQuery';
import RefundRoute from './RefundRoute';

const AuthRoute = props => {
  const { user, userDoc, addresses } = useGlobalState();
  const reviewArray = React.useMemo(() => {
    return [OrderStatus.PENDING_REVIEW.value, OrderStatus.REJECTED.value]
  }, [])
  const reviewOrdersQuery = useOrdersArrayQuery(user.uid, reviewArray);
  const acceptedOrdersQuery = useOrdersQuery(user.uid, OrderStatus.ACCEPTED.value);
  const deliveredOrdersQuery = useOrdersQuery(user.uid, OrderStatus.DELIVERED.value);
  const completedOrdersQuery = useOrdersQuery(user.uid, OrderStatus.COMPLETED.value);
  const deletedOrdersQuery = useOrdersQuery(user.uid, OrderStatus.DELETED.value);
  const pendingRefundOrdersQuery = useOrdersQuery(user.uid, OrderStatus.PENDING_REFUND.value);
  const refundedOrdersQuery = useOrdersQuery(user.uid, OrderStatus.REFUNDED.value);
  const refundRejectedOrdersQuery = useOrdersQuery(user.uid, OrderStatus.REFUND_REJECTED.value);
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
    <FetchCollection collectionName='pendingReviewOrders' query={reviewOrdersQuery} limit={5} />
    <FetchCollection collectionName='acceptedOrders' query={acceptedOrdersQuery} limit={5} />
    <FetchCollection collectionName='deliveredOrders' query={deliveredOrdersQuery} limit={5} />
    <FetchCollection collectionName='completedOrders' query={completedOrdersQuery} limit={5} />
    <FetchCollection collectionName='deletedOrders' query={deletedOrdersQuery} limit={5} />
    <FetchCollection collectionName='pendingRefundOrders' query={pendingRefundOrdersQuery} limit={5} />
    <FetchCollection collectionName='refundedOrders' query={refundedOrdersQuery} limit={5} />
    <FetchCollection collectionName='refundRejectedOrders' query={refundRejectedOrdersQuery} limit={5} />
    <Switch>
      <Route exact path={ClientRoutes.HOME}>
        <IntroRoute />
      </Route>
      <Route exact path={`${ClientRoutes.ORDER}/:orderStatus`}>
        <OrderRoute />
      </Route>
      <Route exact path={`${ClientRoutes.REFUND}/:refundStatus`}>
        <RefundRoute />
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