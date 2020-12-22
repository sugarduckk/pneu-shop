import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { useTheme } from 'shared-lib/core';
import CartIcon from 'shared-lib/icon/CartIcon';
import MenuIcon from 'shared-lib/icon/MenuIcon';
import PneuShop from 'shared-lib/icon/PneuShop';
import UserIcon from 'shared-lib/icon/UserIcon';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import ClientRoutes from '../../constant/ClientRoutes';
import useGoto from '../../hook/useGoto';
import useShowCart from '../../hook/useShowCart';
import useShowMenuDialog from '../../hook/useShowMenuDialog';

const BaseNavRoute = props => {
  const { user } = useGlobalState()
  const theme = useTheme();
  const gotoHome = useGoto(ClientRoutes.HOME);
  const gotoOrder = useGoto(ClientRoutes.ORDER_PENDING_REVIEW)
  const showMenuDialog = useShowMenuDialog();
  const showCart = useShowCart();
  return <>
    <IconContainer onClick={showMenuDialog}>
      <MenuIcon />
    </IconContainer>
    <IconContainer ratio={110 / 60} onClick={gotoHome}>
      <PneuShop fill={theme.color.contrast} />
    </IconContainer>
    <Space />
    {user && <IconContainer onClick={gotoOrder}>
      <UserIcon />
    </IconContainer>}
    <IconContainer onClick={showCart}>
      <CartIcon />
    </IconContainer>
  </>;
};

export default BaseNavRoute;