import React from 'react';
import useGoto from '../../hook/useGoto';
import Button from 'shared-lib/button/Button';
import Space from 'shared-lib/layout/Space';

const HomeNavRoute = props => {
  const gotoLogin = useGoto('/login');
  const gotoRegister = useGoto('/register');
  return <>
    <Space />
    <Button onClick={gotoLogin}>Login</Button>
    <Button onClick={gotoRegister}>Register</Button>
  </>;
};

export default HomeNavRoute;