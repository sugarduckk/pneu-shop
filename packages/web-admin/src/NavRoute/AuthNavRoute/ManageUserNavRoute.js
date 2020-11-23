import React from 'react';
import useGoto from '../../hook/useGoto';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import UserAddIcon from 'shared-lib/icon/UserAddIcon';
import AdminRoutes from '../../constant/AdminRoutes';
import LeftIcon from 'shared-lib/icon/LeftIcon';
import useGoBack from '../../hook/useGoBack';

const ManageUserNavRoute = props => {
  const goBack = useGoBack();
  const gotoCreateUser = useGoto(`${AdminRoutes.USER}/create`);
  return <>
    <IconContainer onClick={goBack}>
      <LeftIcon />
    </IconContainer>
    <Space />
    <IconContainer onClick={gotoCreateUser}>
      <UserAddIcon />
    </IconContainer>
  </>;
};

export default ManageUserNavRoute;