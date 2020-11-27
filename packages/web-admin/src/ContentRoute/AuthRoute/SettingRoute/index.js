import useLogout from 'firebase-wrapper/hook/useLogout';
import React from 'react';
import { useDismissDialog } from 'redux-wrapper/action';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import Button from 'shared-lib/button/Button';
import H1 from 'shared-lib/form-item/H1';
import LogoutIcon from 'shared-lib/icon/LogoutIcon';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';

const SettingRoute = props => {
  const dismissDialog = useDismissDialog();
  const logout = useLogout();
  const showLogoutConfirm = useShowConfirmDialog(() => {
    return logout().then(dismissDialog);
  });
  return <ContentContainer>
    <H1>Settings</H1>
    <CardContainer>
      <Button icon={<LogoutIcon />} onClick={e => {
        showLogoutConfirm({
          message: 'Are you sure to log out?'
        });
      }}>Logout</Button>
    </CardContainer>
  </ContentContainer>;
};

export default SettingRoute;