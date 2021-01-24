import React from 'react';
import { useParams } from 'react-router-dom';
import { BottomContainer } from 'shared-lib/layout';
import BottomTab from 'shared-lib/layout/BottomTab';
import Paging from 'shared-lib/layout/Paging';
import PagingLayout from 'shared-lib/layout/PagingLayout';
import AdminRoutes from '../../../constant/AdminRoutes';
import useGoto from '../../../hook/useGoto';
import IntownRoute from './IntownRoute';
import UpcountryRoute from './UpcountryRoute';

const DeliveryPriceRoute = props => {
  const { area } = useParams();
  const gotoIntown = useGoto(`${AdminRoutes.DELIVERY_PRICE}/intown`);
  const gotoUpcountry = useGoto(`${AdminRoutes.DELIVERY_PRICE}/upcountry`);
  return <>
    <PagingLayout>
      <Paging show={area === 'intown'}>
        <IntownRoute />
      </Paging>
      <Paging show={area === 'upcountry'}>
        <UpcountryRoute />
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={area === 'intown'} onClick={gotoIntown}>Intown</BottomTab>
      <BottomTab disabled={area === 'upcountry'} onClick={gotoUpcountry}>Upcountry</BottomTab>
    </BottomContainer>
  </>;
};

export default DeliveryPriceRoute;