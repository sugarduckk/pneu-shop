import React from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import { BottomContainer } from 'shared-lib/layout';
import BottomTab from 'shared-lib/layout/BottomTab';
import Paging from 'shared-lib/layout/Paging';
import PagingLayout from 'shared-lib/layout/PagingLayout';
import AddressRoute from './AddressRoute';
import OrderRoute from './OrderRoute';
import useGoto from '../../../hook/useGoto';
import ClientRoutes from '../../../constant/ClientRoutes';

const ProfileRoute = props => {
  const location = useLocation();
  const page = React.useMemo(() => {
    const { p } = qs.parse(location.search);
    return p ? parseInt(p) : 0;
  }, [location.search]);
  const gotoP0 = useGoto(`${ClientRoutes.PROFILE}?p=0`);
  const gotoP1 = useGoto(`${ClientRoutes.PROFILE}?p=1`);
  return <>
    <PagingLayout current={page}>
      <Paging show={page === 0}>
        <OrderRoute />
      </Paging>
      <Paging show={page === 1}>
        <AddressRoute />
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={page === 0} onClick={gotoP0}>Order</BottomTab>
      <BottomTab disabled={page === 1} onClick={gotoP1}>Address</BottomTab>
    </BottomContainer>
  </>;
};

export default ProfileRoute;