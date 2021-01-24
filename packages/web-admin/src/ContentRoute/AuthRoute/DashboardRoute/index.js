import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import Button from 'shared-lib/button/Button';
import useGoto from '../../../hook/useGoto';
import H2 from 'shared-lib/form-item/H2';
import AdminRoutes from '../../../constant/AdminRoutes';

const DashboardRoute = props => {
  const gotoManageOrder = useGoto(AdminRoutes.ORDER_PENDING_REVIEW);
  const gotoManageProduct = useGoto(AdminRoutes.PRODUCT);
  const gotoDeliveryPrice = useGoto(`${AdminRoutes.DELIVERY_PRICE}/intown`);
  const gotoManageCategory = useGoto(AdminRoutes.CAT);
  const gotoManagerBrand = useGoto(AdminRoutes.BRAND);
  const gotoManageUser = useGoto(AdminRoutes.USER);
  const gotoManageInterface = useGoto(AdminRoutes.INTERFACE);
  return <ContentContainer>
    <H1>Dashboard</H1>
    <H2>Order Management</H2>
    <CardContainer>
      <Button onClick={gotoManageOrder}>manage order</Button>
    </CardContainer>
    <H2>Product Management</H2>
    <CardContainer>
      <Button onClick={gotoManageProduct}>manage product</Button>
      <Button onClick={gotoManageCategory}>manage category</Button>
      <Button onClick={gotoManagerBrand}>manage brand</Button>
    </CardContainer>
    <H2>Delivery Price</H2>
    <CardContainer>
      <Button onClick={gotoDeliveryPrice}>edit delivery price</Button>
    </CardContainer>
    <H2>User Management</H2>
    <CardContainer>
      <Button onClick={gotoManageUser}>manage user</Button>
    </CardContainer>
    <H2>Interface Management</H2>
    <CardContainer>
      <Button onClick={gotoManageInterface}>manage interface</Button>
    </CardContainer>
  </ContentContainer>;
};

export default DashboardRoute;