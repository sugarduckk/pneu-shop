import React from 'react';
import Button from 'shared-lib/button/Button';
import { useTheme } from 'shared-lib/core';
import CartIcon from 'shared-lib/icon/CartIcon';
import MenuIcon from 'shared-lib/icon/MenuIcon';
import PneuShop from 'shared-lib/icon/PneuShop';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import ClientRoutes from '../../constant/ClientRoutes';
import useGoto from '../../hook/useGoto';
import useShowCart from '../../hook/useShowCart';
import useShowMenuDialog from '../../hook/useShowMenuDialog';

const LoginNavRoute = props => {
  const theme = useTheme();
  const gotoHome = useGoto(ClientRoutes.HOME);
  const showMenuDialog = useShowMenuDialog();
  const showCart = useShowCart();
  const gotoRegister = useGoto(ClientRoutes.REGISTER);
  return <>
    <IconContainer onClick={showMenuDialog}>
      <MenuIcon />
    </IconContainer>
    <IconContainer ratio={110 / 60} onClick={gotoHome}>
      <PneuShop fill={theme.color.contrast} />
    </IconContainer>
    <Space />
    <Button onClick={gotoRegister}>Register</Button>
    <IconContainer onClick={showCart}>
      <CartIcon />
    </IconContainer>
  </>;
};

export default LoginNavRoute;