import React from 'react';
import useGoto from '../../hook/useGoto';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import HomeIcon from 'shared-lib/icon/HomeIcon';
import Button from 'shared-lib/button/Button';

const LoginNavRoute = props => {
  const gotoHome = useGoto('/');
  const gotoRegister = useGoto('/register');
  return <>
    <IconContainer onClick={gotoHome}>
      <HomeIcon />
    </IconContainer>
    <Space />
    <Button onClick={gotoRegister}>Register</Button>
  </>;
};

export default LoginNavRoute;