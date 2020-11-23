import React from 'react';
import useGoto from '../../hook/useGoto';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import HomeIcon from 'shared-lib/icon/HomeIcon';

const SettingNavRoute = props => {
  const gotoHome = useGoto('/');
  return <>
    <IconContainer onClick={gotoHome}>
      <HomeIcon />
    </IconContainer>
    <Space />
  </>;
};

export default SettingNavRoute;