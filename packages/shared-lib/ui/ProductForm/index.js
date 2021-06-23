import React from 'react';
import Button from '../../button/Button';
import Dropdown from '../../form-item/Dropdown';
import Fieldset from '../../form-item/Fieldset';
import Form from '../../form-item/Form';
import ImageSelector from '../../form-item/ImageSelector';
import Selection from '../../form-item/Selection';
import TextArea from '../../form-item/TextArea';
import TextInput from '../../form-item/TextInput';
import FormArray from '../../form-item/FormArray';
import useForm from '../../hook/useForm';
import PriceCard from './PriceCard';
import PriceForm from './PriceForm';
import OptionCreator from '../../form-item/OptionCreator';

export const HasOptions = [
  {
    label: 'No Option',
    value: false
  },
  {
    label: 'Has Options',
    value: true
  }
];

const OptionCard = ({ option }) => {
  return <div>{option.label}</div>;
};

const ProductForm = ({ defaultValues, handleSubmit, validate, cats, brands }) => {
  const { form, onSubmit, disabled, values } = useForm(defaultValues, handleSubmit, validate);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <TextInput {...form('id')} label='ID' />
      <TextInput {...form('name')} label='Name' />
      <Dropdown {...form('category')} label='Category' options={cats} />
      <Dropdown {...form('brand')} label='Brand' options={brands} />
      <TextArea {...form('details')} label='Details' rows='10' />
      <TextInput {...form('in_stock')} label='Amount In Stock' type='number' min='0' />
      <ImageSelector {...form('images')} label='Images' multiple={true} />
      <Selection {...form('has_options')} label='Options' options={HasOptions} OptionCard={OptionCard} />
      {values.has_options.value ?
        <OptionCreator {...form('options')} label='Create Options' />
        :
        <FormArray {...form('prices')} label='Prices' SubForm={PriceForm} PreviewCard={PriceCard} />}
      <TextInput {...form('weight')} label='Unit Weight' type='number' min='0' />
    </Fieldset>
    <Button type='submit' >submit</Button>
  </Form>;
};

export default ProductForm;