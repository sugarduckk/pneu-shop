import React from 'react';
import Button from 'shared-lib/button/Button';
import CartIcon from 'shared-lib/icon/CartIcon';
import MenuIcon from 'shared-lib/icon/MenuIcon';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import useClientString from '../../hook/useClientString';
import useGoto from '../../hook/useGoto';
import useShowCart from '../../hook/useShowCart';
import useShowMenuDialog from '../../hook/useShowMenuDialog';

const HomeNavRoute = props => {
  const S = useClientString();
  const showMenuDialog = useShowMenuDialog();
  const showCart = useShowCart();
  const gotoLogin = useGoto('/login');
  const gotoRegister = useGoto('/register');
  return <>
    <IconContainer onClick={showMenuDialog}>
      <MenuIcon />
    </IconContainer>
    <Space />
    <Button onClick={gotoLogin}>{S.BTN_LOGIN}</Button>
    <Button onClick={gotoRegister}>{S.BTN_REGISTER}</Button>
    <IconContainer onClick={showCart}>
      <CartIcon />
    </IconContainer>
  </>;
};

export default HomeNavRoute;