import React from 'react';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import CardContainer from 'shared-lib/layout/CardContainer';

const DeliveryPriceForm = ({ handleAdd }) => {
  const { form, onSubmit, disabled } = useForm({
    threshold: 1,
    price: 500
  }, handleAdd, null, true);
  return <CardContainer>
    <Fieldset>
      <TextInput {...form('threshold')} label='threshold' type='number' />
      <TextInput {...form('price')} label='price' type='number' />
    </Fieldset>
    <Button disabled={disabled} type='button' onClick={onSubmit}>Add</Button>
  </CardContainer>;
};

export default DeliveryPriceForm;