import React from 'react';
import Button from 'shared-lib/button/Button';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import useShowAddressFormDialog from '../../../../hook/useShowAddressFormDialog';

const AddressRoute = props => {
  const showAddressFormDialog = useShowAddressFormDialog();
  return <>
    <H1>Address</H1>
    <CardContainer>
      <Button onClick={showAddressFormDialog}>Add Address</Button>
    </CardContainer>

  </>;
};

export default AddressRoute;