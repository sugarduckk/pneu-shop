import React from 'react';
import { BottomContainer } from 'shared-lib/layout';
import BottomTab from 'shared-lib/layout/BottomTab';
import PlusIcon from 'shared-lib/icon/PlusIcon';
import AddSingle from './AddSingle';
import PagingLayout from 'shared-lib/layout/PagingLayout';
import Paging from 'shared-lib/layout/Paging';
import AddBulk from './AddBulk';

const CreateNewProduct = props => {
  const [tab, setTab] = React.useState(0);
  return <>
    <PagingLayout current={tab}>
      <Paging show={tab === 0}>
        <AddSingle />
      </Paging>
      <Paging show={tab === 1}>
        <AddBulk />
      </Paging>
    </PagingLayout>
    <BottomContainer>
      <BottomTab disabled={tab === 0} icon={<PlusIcon />} onClick={e => setTab(0)}>Add Single</BottomTab>
      <BottomTab disabled={tab === 1} icon={<PlusIcon />} onClick={e => setTab(1)}>Add Bulk</BottomTab>
    </BottomContainer>
  </>;
};



export default CreateNewProduct;