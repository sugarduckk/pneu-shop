import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import Button from 'shared-lib/button/Button';
import useGoto from '../../hook/useGoto';

const DashboardRoute = props => {
  const gotoManagerUsers = useGoto('/manager_users');
  return <ContentContainer>
    <H1>DashboardRoute</H1>
    <CardContainer>
      <Button onClick={gotoManagerUsers}>manage users</Button>
    </CardContainer>
  </ContentContainer>;
};

export default DashboardRoute;