import React from 'react';
import { useDismissDialog } from 'redux-wrapper/action';
import Button from 'shared-lib/button/Button';
import GearIcon from 'shared-lib/icon/GearIcon';
import ClientRoutes from '../constant/ClientRoutes';
import useGoto from '../hook/useGoto';

const SettingButton = () => {
  const gotoSetting = useGoto(ClientRoutes.SETTING);
  const dismissDialog = useDismissDialog();
  return <Button icon={<GearIcon />}
    onClick={() => {
      gotoSetting();
      dismissDialog();
    }}>
    Setting
  </Button>;
};

export default SettingButton;