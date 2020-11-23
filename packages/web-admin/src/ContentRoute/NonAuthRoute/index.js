import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import LoginRoute from './LoginRoute';

const NonAuthRoute = props => {
  return <ContentContainer>
    <LoginRoute />
  </ContentContainer>;
};

export default NonAuthRoute;