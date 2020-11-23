import React from 'react';
import NonAuthRoute from './NonAuthRoute';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import AuthRoute from './AuthRoute';

const ContentRoute = props => {
  const { user } = useGlobalState();
  if (!user) return <NonAuthRoute />;
  return <AuthRoute />;
};

export default ContentRoute;