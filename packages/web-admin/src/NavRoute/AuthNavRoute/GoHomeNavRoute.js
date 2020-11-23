import React from 'react';
import Space from 'shared-lib/layout/Space';
import IconContainer from 'shared-lib/ui/IconContainer';
import useGoto from '../../hook/useGoto';
import HomeIcon from 'shared-lib/icon/HomeIcon';

const GoHomeNavRoute = props => {
  const goHome = useGoto('/');
  return <>
    <IconContainer onClick={goHome}>
      <HomeIcon />
    </IconContainer>
    <Space />
  </>;
};

export default GoHomeNavRoute;