import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDismissDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowChangeLanguageDialog from 'redux-wrapper/hook/useShowChangeLanguageDialog';
import Button from 'shared-lib/button/Button';
import DollarIcon from 'shared-lib/icon/DollarIcon';
import EarthIcon from 'shared-lib/icon/EarthIcon';
import HomeIcon from 'shared-lib/icon/HomeIcon';
import InfoIcon from 'shared-lib/icon/InfoIcon';
import PhoneIcon from 'shared-lib/icon/PhoneIcon';
import PinIcon from 'shared-lib/icon/PinIcon';
import SearchIcon from 'shared-lib/icon/SearchIcon';
import ShapesIcon from 'shared-lib/icon/ShapesIcon';
import TagIcon from 'shared-lib/icon/TagIcon';
import UserIcon from 'shared-lib/icon/UserIcon';
import MenuLayout from 'shared-lib/layout/MenuLayout';
import ClientRoutes from '../constant/ClientRoutes';
import useShowSearchProduct from '../ContentRoute/NonAuthRoute/useShowSearchProduct';
import useClientString from '../hook/useClientString';
import useGoto from '../hook/useGoto';
import SettingButton from './SettingButton';

const MenuRoute = () => {
  const S = useClientString();
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
  const gotoRefund = useGoto(ClientRoutes.PENDING_REFUND);
  const gotoAboutUs = useGoto(ClientRoutes.ABOUTUS);
  const gotoContact = useGoto(ClientRoutes.CONTACT);
  const gotoAddress = useGoto(ClientRoutes.ADDRESS);
  const showChangeLanguage = useShowChangeLanguageDialog();
  return <MenuLayout>
    <Button onClick={() => {
      gotoHome();
      dismissDialog();
    }} icon={<HomeIcon />}>{S.MENU_HOME}</Button>
    <Button onClick={showSearchProduct} icon={<SearchIcon />}>{S.MENU_SEARCH}</Button>
    {user && <>
      <Button icon={<UserIcon />} onClick={() => {
        gotoOrder();
        dismissDialog();
      }} >{S.MENU_ORDER}</Button>
      <Button icon={<DollarIcon />} onClick={() => {
        gotoRefund();
        dismissDialog();
      }} >{S.MENU_REFUND}</Button>
    </>}
    <Button icon={<ShapesIcon />} onClick={onCatsClick}>
      {S.MENU_CAT}
    </Button>
    <Button icon={<TagIcon />} onClick={onBrandsClick}>
      {S.MENU_BRAND}
    </Button>
    <Button icon={<InfoIcon />} onClick={() => {
      gotoAboutUs();
      dismissDialog();
    }}>
      {S.MENU_ABOUT}
    </Button>
    <Button icon={<PhoneIcon />}
      onClick={() => {
        gotoContact();
        dismissDialog();
      }}>
      {S.MENU_CONTACT}
    </Button>
    {user && <>
      <SettingButton />
      <Button icon={<PinIcon />} onClick={() => {
        gotoAddress();
        dismissDialog();
      }}>
        {S.MENU_ADDRESS}
      </Button>
    </>}
    <Button icon={<EarthIcon />} onClick={showChangeLanguage}>
      {S.MENU_LANGUAGE}
    </Button>
    <Button bg='red' onClick={dismissDialog}>dismiss</Button>
  </MenuLayout>;
};

export default MenuRoute;