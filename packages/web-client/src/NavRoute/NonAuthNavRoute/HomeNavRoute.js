import React from 'react';
import useGoto from '../../hook/useGoto';
import Button from 'shared-lib/button/Button';
import Space from 'shared-lib/layout/Space';
import PneuShop from 'shared-lib/icon/PneuShop';
import IconContainer from 'shared-lib/ui/IconContainer';
import { useTheme } from 'shared-lib/core';
import MenuIcon from 'shared-lib/icon/MenuIcon';
import useShowMenuDialog from '../../hook/useShowMenuDialog';

const HomeNavRoute = props => {
  const theme = useTheme();
  const showMenuDialog = useShowMenuDialog();
  const gotoLogin = useGoto('/login');
  const gotoRegister = useGoto('/register');
  return <>
    <IconContainer onClick={showMenuDialog}>
      <MenuIcon />
    </IconContainer>
    <IconContainer ratio={110 / 60}>
      <PneuShop fill={theme.color.contrast} />
    </IconContainer>
    <Space />
    <Button onClick={gotoLogin}>Login</Button>
    <Button onClick={gotoRegister}>Register</Button>
  </>;
};

export default HomeNavRoute;