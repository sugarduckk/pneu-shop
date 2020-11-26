import React from 'react';
import PneuShop from 'shared-lib/icon/PneuShop';
import IconContainer from 'shared-lib/ui/IconContainer';
import { useTheme } from 'shared-lib/core';
import MenuIcon from 'shared-lib/icon/MenuIcon';
import useShowMenuDialog from '../../hook/useShowMenuDialog';
import useGoto from '../../hook/useGoto';
import ClientRoutes from '../../constant/ClientRoutes';

const BaseNavRoute = props => {
  const theme = useTheme();
  const gotoHome = useGoto(ClientRoutes.HOME);
  const showMenuDialog = useShowMenuDialog();
  return <>
    <IconContainer onClick={showMenuDialog}>
      <MenuIcon />
    </IconContainer>
    <IconContainer ratio={110 / 60} onClick={gotoHome}>
      <PneuShop fill={theme.color.contrast} />
    </IconContainer>
  </>;
};

export default BaseNavRoute;