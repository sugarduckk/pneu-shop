import React from 'react';
import CartIcon from 'shared-lib/icon/CartIcon';
import MenuIcon from 'shared-lib/icon/MenuIcon';
import UserIcon from 'shared-lib/icon/UserIcon';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import ClientRoutes from '../../constant/ClientRoutes';
import useGoto from '../../hook/useGoto';
import useShowCart from '../../hook/useShowCart';
import useShowMenuDialog from '../../hook/useShowMenuDialog';

const DashboardNavRoute = props => {
  const showMenuDialog = useShowMenuDialog();
  const gotoProfile = useGoto(ClientRoutes.ORDER_PENDING_REVIEW);
  const showCart = useShowCart();
  return <>
    <IconContainer onClick={showMenuDialog}>
      <MenuIcon />
    </IconContainer>
    <Space />
    <IconContainer onClick={gotoProfile}>
      <UserIcon />
    </IconContainer>
    <IconContainer onClick={showCart}>
      <CartIcon />
    </IconContainer>
  </>;
};

export default DashboardNavRoute;