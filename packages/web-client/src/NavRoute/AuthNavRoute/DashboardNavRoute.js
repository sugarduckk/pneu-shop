import React from 'react';
import useGoto from '../../hook/useGoto';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import GearIcon from 'shared-lib/icon/GearIcon';
import MenuIcon from 'shared-lib/icon/MenuIcon';
import useShowMenuDialog from '../../hook/useShowMenuDialog';

const DashboardNavRoute = props => {
  const showMenuDialog = useShowMenuDialog()
  const gotoSetting = useGoto('/setting');
  return <>
    <IconContainer onClick={showMenuDialog}>
      <MenuIcon/>
    </IconContainer>
    <Space />
    <IconContainer onClick={gotoSetting}>
      <GearIcon />
    </IconContainer>
  </>;
};

export default DashboardNavRoute;