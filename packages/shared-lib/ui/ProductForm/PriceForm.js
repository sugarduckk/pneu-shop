import React from 'react';
import Button from '../../button/Button';
import Fieldset from '../../form-item/Fieldset';
import TextInput from '../../form-item/TextInput';
import useForm from '../../hook/useForm';
import CardContainer from '../../layout/CardContainer';

const PriceForm = ({ handleAdd }) => {
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

export default PriceForm;