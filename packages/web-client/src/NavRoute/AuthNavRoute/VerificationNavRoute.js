import React from 'react';
import { NavContainer } from 'shared-lib/layout';
import IconButton from 'shared-lib/button/IconButton';
import LogoutIcon from 'shared-lib/icon/LogoutIcon';
import useLogout from 'firebase-wrapper/hook/useLogout';
import Space from 'shared-lib/layout/Space';

const VerificationNavRoute = props => {
  const logout = useLogout();
  return <NavContainer>
    <Space />
    <IconButton icon={<LogoutIcon />} onClick={logout}>logout</IconButton>
  </NavContainer>;
};

export default VerificationNavRoute;