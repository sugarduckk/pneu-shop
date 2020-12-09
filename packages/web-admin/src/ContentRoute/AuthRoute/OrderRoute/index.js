import React from 'react';
import { BottomContainer } from 'shared-lib/layout';
import BottomTab from 'shared-lib/layout/BottomTab';
import Paging from 'shared-lib/layout/Paging';
import PagingLayout from 'shared-lib/layout/PagingLayout';
import OrderStatus from '../../../../../web-client/src/constant/OrderStatus';
import PendingReviewRoute from './PendingReviewRoute';

const OrderRoute = props => {
  const [tab, setTab] = React.useState(0);
  return <>
    <PagingLayout current={tab}>
      <Paging show={tab === 0}>
        <PendingReviewRoute />
      </Paging>
      <Paging show={tab === 1}>
        <div>1</div>
      </Paging>
      <Paging show={tab === 2}>
        <div>2</div>
      </Paging>
      <Paging show={tab === 3}>
        <div>3</div>
      </Paging>
      <Paging show={tab === 4}>
        <div>4</div>
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={tab === 0} onClick={e => setTab(0)}>{OrderStatus.PENDING_REVIEW}</BottomTab>
      <BottomTab disabled={tab === 1} onClick={e => setTab(1)}>{OrderStatus.ACCEPTED}</BottomTab>
      <BottomTab disabled={tab === 2} onClick={e => setTab(2)}>{OrderStatus.DELIVERED}</BottomTab>
      <BottomTab disabled={tab === 3} onClick={e => setTab(3)}>{OrderStatus.COMPLETED}</BottomTab>
      <BottomTab disabled={tab === 4} onClick={e => setTab(4)}>{OrderStatus.DELETED}</BottomTab>
    </BottomContainer>
  </>;
};

export default OrderRoute;