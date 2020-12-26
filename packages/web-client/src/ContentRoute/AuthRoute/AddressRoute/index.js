import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import H1 from 'shared-lib/form-item/H1';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import useClientString from '../../../hook/useClientString';
import useShowAddressFormDialog from '../../../hook/useShowAddressFormDialog';
import AddressCard from './AddressCard';

const AddressRoute = props => {
  const S = useClientString();
  const { addresses } = useGlobalState();
  const showAddressFormDialog = useShowAddressFormDialog();
  return <ContentContainer>
    <H1>{S.ADDRESS}</H1>
    <CardContainer>
      <Button onClick={showAddressFormDialog}>
        {S.ADD_ADDRESS}
      </Button>
    </CardContainer>
    {addresses.length === 0 ?
      <SimpleCard>{S.NO_ADDRESS}</SimpleCard>
      :
      addresses.map((address, addressIndex) => {
        return <AddressCard key={addressIndex} address={address} />;
      })}
  </ContentContainer>;
};

export default AddressRoute;