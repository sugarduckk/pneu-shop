import React from 'react';
import NonAuthNavRoute from './NonAuthNavRoute';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import AuthNavRoute from './AuthNavRoute';

const NavRoute = props => {
  const { user } = useGlobalState();
  if (!user) return <NonAuthNavRoute />;
  return <AuthNavRoute />;
};

export default NavRoute;