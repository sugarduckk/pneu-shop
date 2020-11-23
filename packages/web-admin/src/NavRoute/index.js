import React from 'react';
import AuthNavRoute from './AuthNavRoute';
import NonAuthNavRoute from './NonAuthNavRoute';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';

const NavRoute = props => {
  const { user } = useGlobalState();
  if (!user) return <NonAuthNavRoute />;
  return <AuthNavRoute />;
};

export default NavRoute;