import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import Button from 'shared-lib/button/Button';
import useOnAddBrand from './useOnAddBrand';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import AdminBrandCard from './AdminBrandCard';
import GridLayout from 'shared-lib/layout/GridLayout';

const ManageBrandRoute = props => {
  const { brands } = useGlobalState();
  const onAddBrand = useOnAddBrand();
  return <ContentContainer>
    <H1>Manage Brand</H1>
    <CardContainer>
      <Button onClick={onAddBrand}>Add Brand</Button>
    </CardContainer>
    <GridLayout>
      {brands.map(brand => {
        return <AdminBrandCard key={brand.value} brand={brand} />;
      })}
    </GridLayout>
  </ContentContainer>;
};

export default ManageBrandRoute;