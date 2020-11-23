import React from 'react';
import useGoto from '../../hook/useGoto';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import GearIcon from 'shared-lib/icon/GearIcon';

const DashboardNavRoute = props => {
  const gotoSetting = useGoto('/setting');
  return <>
    <Space />
    <IconContainer onClick={gotoSetting}>
      <GearIcon />
    </IconContainer>
  </>;
};

export default DashboardNavRoute;