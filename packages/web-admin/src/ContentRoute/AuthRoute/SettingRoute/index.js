import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import IconButton from 'shared-lib/button/IconButton';
import LogoutIcon from 'shared-lib/icon/LogoutIcon';
import useLogout from 'firebase-wrapper/hook/useLogout';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { useDismissDialog } from 'redux-wrapper/action';

const SettingRoute = props => {
  const dismissDialog = useDismissDialog();
  const logout = useLogout();
  const showLogoutConfirm = useShowConfirmDialog(() => {
    return logout().then(dismissDialog);
  });
  return <ContentContainer>
    <H1>Settings</H1>
    <CardContainer>
      <IconButton icon={<LogoutIcon />} onClick={e => {
        showLogoutConfirm({
          message: 'Are you sure to log out?'
        });
      }}>Logout</IconButton>
    </CardContainer>
  </ContentContainer>;
};

export default SettingRoute;