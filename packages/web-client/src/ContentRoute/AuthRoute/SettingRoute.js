import useLogout from 'firebase-wrapper/hook/useLogout';
import React from 'react';
import Button from 'shared-lib/button/Button';
import H1 from 'shared-lib/form-item/H1';
import LogoutIcon from 'shared-lib/icon/LogoutIcon';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';

const SettingRoute = props => {
  const logout = useLogout();
  return <ContentContainer>
    <H1>SettingRoute</H1>
    <CardContainer>
      <Button icon={<LogoutIcon />} onClick={logout}>Logout</Button>
    </CardContainer>
  </ContentContainer>;
};

export default SettingRoute;