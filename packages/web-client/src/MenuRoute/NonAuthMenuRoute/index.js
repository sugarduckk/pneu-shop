import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDismissDialog } from 'redux-wrapper/action';
import Button from 'shared-lib/button/Button';
import ClientRoutes from '../../constant/ClientRoutes';
import useShowSearchProduct from '../../ContentRoute/NonAuthRoute/useShowSearchProduct';
import useGoto from '../../hook/useGoto';

const NonAuthMenuRoute = () => {
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
  const gotoAboutUs = useGoto(ClientRoutes.ABOUTUS);
  const gotoContact = useGoto(ClientRoutes.CONTACT);
  return <>
    <Button onClick={showSearchProduct}>Search for Products</Button>
    <Button onClick={onCatsClick}>Product Categories</Button>
    <Button onClick={onBrandsClick}>Product Brands</Button>
    <Button onClick={() => {
      gotoAboutUs();
      dismissDialog();
    }}>About Us</Button>
    <Button onClick={() => {
      gotoContact();
      dismissDialog();
    }}>Contact</Button>
    <Button bg='red' onClick={dismissDialog}>dismiss</Button>
  </>;
};

export default NonAuthMenuRoute;