import React from 'react';
import { useAddDialog, useDismissDialog } from 'redux-wrapper/action';
import DialogButton from 'shared-lib/button/DialogButton';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import FormArray from 'shared-lib/form-item/FormArray';
import useForm from 'shared-lib/hook/useForm';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DeliveryPriceCard from './DeliveryPriceCard';
import DeliveryPriceForm from './DeliveryPriceForm';

const ShowEditDeliveryPriceDialog = ({ defaultValues, handleSubmit }) => {
  const { form, onSubmit, disabled } = useForm({
    deliveryPrices: defaultValues
  }, handleSubmit);
  const dismiss = useDismissDialog();
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <FormArray {...form('deliveryPrices')} label='Delivery prices' SubForm={DeliveryPriceForm} PreviewCard={DeliveryPriceCard} />
    </Fieldset>
    <DialogButtonLayout>
      <DialogButton disabled={disabled} type='button' onClick={dismiss}>dismiss</DialogButton>
      <DialogButton disabled={disabled} loading={disabled} type='submit'>submit</DialogButton>
    </DialogButtonLayout>
  </Form>;
};

const useShowEditDeliveryPriceDialog = (defaultValues, handleSubmit) => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<ShowEditDeliveryPriceDialog defaultValues={defaultValues} handleSubmit={handleSubmit} />);
  }, [addDialog, defaultValues, handleSubmit]);
};

export default useShowEditDeliveryPriceDialog;