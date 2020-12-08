import React from 'react';
import { useParams } from 'react-router-dom';
import { BottomContainer } from 'shared-lib/layout';
import BottomTab from 'shared-lib/layout/BottomTab';
import Paging from 'shared-lib/layout/Paging';
import PagingLayout from 'shared-lib/layout/PagingLayout';
import ClientRoutes from '../../../constant/ClientRoutes';
import useGoto from '../../../hook/useGoto';
import AddressRoute from './AddressRoute';
import OrderRoute from './OrderRoute';

const ProfileRoute = props => {
  const { subProfile } = useParams();
  const page = React.useMemo(() => {
    switch (subProfile) {
      case 'order':
        return 0;
      case 'address':
        return 1;
      default:
        return 0;
    }
  }, [subProfile]);
  const gotoOrder = useGoto(ClientRoutes.ORDER);
  const gotoAddress = useGoto(ClientRoutes.ADDRESS);
  return <>
    <PagingLayout current={page}>
      <Paging show={subProfile === 'order'}>
        <OrderRoute />
      </Paging>
      <Paging show={subProfile === 'address'}>
        <AddressRoute />
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={subProfile === 'order'} onClick={gotoOrder}>Order</BottomTab>
      <BottomTab disabled={subProfile === 'address'} onClick={gotoAddress}>Address</BottomTab>
    </BottomContainer>
  </>;
};

export default ProfileRoute;