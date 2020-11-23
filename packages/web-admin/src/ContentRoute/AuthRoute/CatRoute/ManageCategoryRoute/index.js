import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import Button from 'shared-lib/button/Button';
import useOnAddCategory from './useOnAddCategory';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import AdminCatCard from './AdminCatCard';
import GridLayout from 'shared-lib/layout/GridLayout';

const ManageCategoryRoute = props => {
  const { cats } = useGlobalState();
  const onAddCategory = useOnAddCategory();
  return <ContentContainer>
    <H1>Manage Category</H1>
    <CardContainer>
      <Button onClick={onAddCategory}>Add Category</Button>
    </CardContainer>
    <GridLayout>
      {cats.map(cat => {
        return <AdminCatCard key={cat.value} cat={cat} />;
      })}
    </GridLayout>
  </ContentContainer>;
};

export default ManageCategoryRoute;