import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SettingRoute from './SettingRoute';
import DashboardRoute from './DashboardRoute';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import VerificationRoute from './VerificationRoute';
import useUserDoc from 'firebase-wrapper/firestore/useUserDoc';
import { useSetState } from 'redux-wrapper/action';
import LoadingScreen from 'shared-lib/screen/LoadingScreen';
import LoadingContent from './LoadingContent';

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
    <Route exact path='/'>
      <DashboardRoute />
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