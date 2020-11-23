import React from 'react';
import useGoto from '../../hook/useGoto';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import PlusIcon from 'shared-lib/icon/PlusIcon';
import AdminRoutes from '../../constant/AdminRoutes';
import useGoBack from '../../hook/useGoBack';
import LeftIcon from 'shared-lib/icon/LeftIcon';

const ManageProductNavRoute = props => {
  const goBack = useGoBack();
  const gotoCreateProduct = useGoto(`${AdminRoutes.PRODUCT}/create`);
  return <>
    <IconContainer onClick={goBack}>
      <LeftIcon />
    </IconContainer>
    <Space />
    <IconContainer onClick={gotoCreateProduct}>
      <PlusIcon />
    </IconContainer>
  </>;
};

export default ManageProductNavRoute;