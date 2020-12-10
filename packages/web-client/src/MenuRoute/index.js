import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDismissDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import HomeIcon from 'shared-lib/icon/HomeIcon';
import PhoneIcon from 'shared-lib/icon/PhoneIcon';
import SearchIcon from 'shared-lib/icon/SearchIcon';
import UserIcon from 'shared-lib/icon/UserIcon';
import MenuLayout from 'shared-lib/layout/MenuLayout';
import ClientRoutes from '../constant/ClientRoutes';
import useShowSearchProduct from '../ContentRoute/NonAuthRoute/useShowSearchProduct';
import useGoto from '../hook/useGoto';
import SettingButton from './SettingButton';

const MenuRoute = () => {
  const { user } = useGlobalState();
  const location = useLocation();
  const dismissDialog = useDismissDialog();
  const showSearchProduct = useShowSearchProduct(true);
  const gotoCats = useGoto(`${ClientRoutes.HOME}?sect=cats`);
  const onCatsClick = React.useCallback(() => {
    if (location.pathname === ClientRoutes.HOME) {
      var topOfElement = document.getElementById('category_header').offsetTop - 60;
      window.scroll({ top: topOfElement, behavior: "smooth" });
    }
    else {
      gotoCats();
    }
    dismissDialog();
  }, [dismissDialog, gotoCats, location.pathname]);
  const gotoBrands = useGoto(`${ClientRoutes.HOME}?sect=brands`);
  const onBrandsClick = React.useCallback(() => {
    if (location.pathname === ClientRoutes.HOME) {
      var topOfElement = document.getElementById('brand_header').offsetTop - 60;
      window.scroll({ top: topOfElement, behavior: "smooth" });
    }
    else {
      gotoBrands();
    }
    dismissDialog();
  }, [dismissDialog, gotoBrands, location.pathname]);
  const gotoHome = useGoto(ClientRoutes.HOME);
  const gotoOrder = useGoto(ClientRoutes.ORDER_PENDING_REVIEW);
  const gotoAboutUs = useGoto(ClientRoutes.ABOUTUS);
  const gotoContact = useGoto(ClientRoutes.CONTACT);
  const gotoAddress = useGoto(ClientRoutes.ADDRESS);
  return <MenuLayout>
    <Button onClick={() => {
      gotoHome();
      dismissDialog();
    }} icon={<HomeIcon />}>Home</Button>
    <Button icon={<UserIcon />} onClick={() => {
      gotoOrder();
      dismissDialog();
    }} >My Orders</Button>
    <Button onClick={showSearchProduct} icon={<SearchIcon />}>Search</Button>
    <Button onClick={onCatsClick}>Categories</Button>
    <Button onClick={onBrandsClick}>Brands</Button>
    <Button onClick={() => {
      gotoAboutUs();
      dismissDialog();
    }}>About Us</Button>
    <Button icon={<PhoneIcon />}
      onClick={() => {
        gotoContact();
        dismissDialog();
      }}>Contact</Button>
    {user && <SettingButton />}
    <Button onClick={() => {
      gotoAddress()
      dismissDialog()
    }}>Address</Button>
    <Button bg='red' onClick={dismissDialog}>dismiss</Button>
  </MenuLayout>;
};

export default MenuRoute;