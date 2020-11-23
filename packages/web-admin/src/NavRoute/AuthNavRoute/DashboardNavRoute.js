import React from 'react';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import useGoto from '../../hook/useGoto';
import AdminRoutes from '../../constant/AdminRoutes';
import GearIcon from 'shared-lib/icon/GearIcon';

const DashboardNavRoute = props => {
  const gotoSetting = useGoto(AdminRoutes.SETTING);
  return <>
    <Space />
    <IconContainer onClick={gotoSetting}>
      <GearIcon />
    </IconContainer>
  </>;
};

export default DashboardNavRoute;