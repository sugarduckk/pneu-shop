import useLogout from 'firebase-wrapper/hook/useLogout';
import React from 'react';
import Button from 'shared-lib/button/Button';
import LogoutIcon from 'shared-lib/icon/LogoutIcon';
import { NavContainer } from 'shared-lib/layout';
import Space from 'shared-lib/layout/Space';

const VerificationNavRoute = props => {
  const logout = useLogout();
  return <NavContainer>
    <Space />
    <Button icon={<LogoutIcon />} onClick={logout}>logout</Button>
  </NavContainer>;
};

export default VerificationNavRoute;