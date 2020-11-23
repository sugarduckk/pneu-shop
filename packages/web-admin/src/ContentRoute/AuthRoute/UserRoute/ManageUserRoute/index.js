import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import PaginationScreen from 'shared-lib/screen/PaginationScreen';
import H1 from 'shared-lib/form-item/H1';
import RoleCard from './RoleCard';
import CardContainer from 'shared-lib/layout/CardContainer';
import Button from 'shared-lib/button/Button';
import useOnAddPermission from './useOnAddPermission';


const ManageUserRoute = props => {
  const addPermission = useOnAddPermission();
  return <ContentContainer>
    <H1>User Management</H1>
    <CardContainer>
      <Button onClick={addPermission}>Add permission</Button>
    </CardContainer>
    <PaginationScreen Card={RoleCard} collectionName='roles' limit={5} />
  </ContentContainer>;
};

export default ManageUserRoute;