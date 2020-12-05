import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import useShowAddressFormDialog from '../../../../hook/useShowAddressFormDialog';
import LoadingContent from '../../LoadingContent';
import AddressCard from './AddressCard';

const AddressRoute = props => {
  const { addresses } = useGlobalState();
  const showAddressFormDialog = useShowAddressFormDialog();
  return <>
    <H1>Address</H1>
    <CardContainer>
      <Button onClick={showAddressFormDialog}>Add Address</Button>
    </CardContainer>
    {addresses.length === 0 ?
      <SimpleCard>No address</SimpleCard>
      :
      addresses.map((address, addressIndex) => {
        return <AddressCard key={addressIndex} address={address} />;
      })}
  </>;
};

export default AddressRoute;