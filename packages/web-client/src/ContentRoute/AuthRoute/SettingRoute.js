import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import IconButton from 'shared-lib/button/IconButton';
import LogoutIcon from 'shared-lib/icon/LogoutIcon';
import useLogout from 'firebase-wrapper/hook/useLogout';

const SettingRoute = props => {
  const logout = useLogout();
  return <ContentContainer>
    <H1>SettingRoute</H1>
    <CardContainer>
      <IconButton icon={<LogoutIcon />} onClick={logout}>Logout</IconButton>
    </CardContainer>
  </ContentContainer>;
};

export default SettingRoute;