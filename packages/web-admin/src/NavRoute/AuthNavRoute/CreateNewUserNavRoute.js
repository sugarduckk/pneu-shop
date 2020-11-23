import React from 'react';
import useGoto from '../../hook/useGoto';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import HomeIcon from 'shared-lib/icon/HomeIcon';

const CreateNewUserNavRoute = props => {
  const gotoDashboard = useGoto('/');
  return <>
    <IconContainer onClick={gotoDashboard}>
      <HomeIcon />
    </IconContainer>
    <Space />
  </>;
};

export default CreateNewUserNavRoute;