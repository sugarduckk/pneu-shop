import React from 'react';
import useGoto from '../../hook/useGoto';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import HomeIcon from 'shared-lib/icon/HomeIcon';
import Button from 'shared-lib/button/Button';

const RegisterNavRoute = props => {
  const gotoHome = useGoto('/');
  const gotoLogin = useGoto('/login');
  return <>
    <IconContainer onClick={gotoHome}>
      <HomeIcon />
    </IconContainer>
    <Space />
    <Button onClick={gotoLogin}>Login</Button>
  </>;
};

export default RegisterNavRoute;