import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import AuthMenuRoute from './AuthMenuRoute';
import NonAuthMenuRoute from './NonAuthMenuRoute';

const MenuRoute = props => {
  const { user } = useGlobalState();
  if (!user) return <NonAuthMenuRoute />;
  return <AuthMenuRoute />;
};

export default MenuRoute;