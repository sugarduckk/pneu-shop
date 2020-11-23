import useSetMainCarousel from 'firebase-wrapper/firestore/useSetMainCarousel';
import React from 'react';
import { useAddDialog, useDismissDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import FormArray from 'shared-lib/form-item/FormArray';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import validateFeatureProductForm from './validateFeatureProductForm';

const FeaturedProductCard = ({ values }) => {
  return <SimpleCard>
    {values.productId}
  </SimpleCard>;
};

const FeatureProductForm = ({ handleAdd }) => {
  const { form, onSubmit, disabled } = useForm({
    productId: ''
  }, handleAdd, validateFeatureProductForm, true);
  return <CardContainer>
    <Fieldset disabled={disabled}>
      <TextInput {...form('productId')} label='Add product ID' />
    </Fieldset>
    <Button disabled={disabled} type='button' onClick={onSubmit}>Add</Button>
  </CardContainer>;
};

const EditMainCarousel = props => {
  const { config } = useGlobalState();
  const dismissDialog = useDismissDialog();
  const setMainCarousel = useSetMainCarousel();
  const { form, onSubmit, disabled } = useForm({
    productIds: (config && config.interface && config.interface.mainCarousel) || []
  }, values => {
    return setMainCarousel(values.productIds)
      .then(dismissDialog);
  });
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <FormArray {...form('productIds')} label='Featured product IDs' SubForm={FeatureProductForm} PreviewCard={FeaturedProductCard} />
    </Fieldset>
    <CardContainer row={true}>
      <Space />
      <Button type='button' bg='red' disabled={disabled} onClick={dismissDialog}>dismiss</Button>
      <Button type='submit' disabled={disabled} loading={disabled}>confirm</Button>
    </CardContainer>
  </Form>;
};

const useEditMainCarousel = () => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<EditMainCarousel />);
  }, [addDialog]);
};

export default useEditMainCarousel;