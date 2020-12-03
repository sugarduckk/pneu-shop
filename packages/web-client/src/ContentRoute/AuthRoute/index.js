import useUserDoc from 'firebase-wrapper/firestore/useUserDoc';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSetState } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import ClientRoutes from '../../constant/ClientRoutes';
import IntroRoute from '../CommonRoute/IntroRoute';
import LoadingContent from './LoadingContent';
import ProfileRoute from './ProfileRoute';
import SettingRoute from './SettingRoute';
import VerificationRoute from './VerificationRoute';

const AuthRoute = props => {
  const { user, userDoc } = useGlobalState();
  const setState = useSetState();
  const handleUserDoc = React.useCallback(userDoc => {
    setState({ userDoc });
  }, [setState]);
  useUserDoc(user.uid, handleUserDoc);
  if (!userDoc) return <LoadingContent />;
  if (!user.emailVerified) return <VerificationRoute />;
  return <Switch>
    <Route exact path={ClientRoutes.HOME}>
      <IntroRoute />
    </Route>
    <Route exact path={ClientRoutes.PROFILE}>
      <ProfileRoute />
    </Route>
    <Route exact path='/setting'>
      <SettingRoute />
    </Route>
    <Route>
      <Redirect to='/' />
    </Route>
  </Switch>;
};

export default AuthRoute;