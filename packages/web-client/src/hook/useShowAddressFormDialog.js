import React from 'react';
import { useAddDialog, useDismissDialog } from 'redux-wrapper/action';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import TextInput from 'shared-lib/form-item/TextInput';
import RowLayout from 'shared-lib/layout/RowLayout';
import Space from 'shared-lib/layout/Space';

const AddressFormDialog = () => {
  const dismissDialog = useDismissDialog();
  return <Form>
    <Fieldset>
      <TextInput label='ที่อยู่' />
    </Fieldset>
    <RowLayout>
      <Space />
      <Button bg='red' type='button' onClick={dismissDialog}>Dismiss</Button>
      <Button type='submit'>Save</Button>
    </RowLayout>
  </Form>;
};

const useShowAddressFormDialog = () => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<AddressFormDialog />);
  }, [addDialog]);
};

export default useShowAddressFormDialog;