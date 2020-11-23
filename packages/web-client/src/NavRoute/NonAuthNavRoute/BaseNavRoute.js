import React from 'react';
import HomeIcon from 'shared-lib/icon/HomeIcon';
import IconContainer from 'shared-lib/ui/IconContainer';
import useGoto from '../../../../web-admin/src/hook/useGoto';

const BaseNavRoute = props => {
  const gotoHome = useGoto('/');
  return <>
    <IconContainer onClick={gotoHome}>
      <HomeIcon />
    </IconContainer>
  </>;
};

export default BaseNavRoute;