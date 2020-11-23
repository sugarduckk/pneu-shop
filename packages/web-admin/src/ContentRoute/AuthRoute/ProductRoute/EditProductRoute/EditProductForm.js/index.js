import React from 'react';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import TextInput from 'shared-lib/form-item/TextInput';
import Dropdown from 'shared-lib/form-item/Dropdown';
import TextArea from 'shared-lib/form-item/TextArea';
import ImageSelector from 'shared-lib/form-item/ImageSelector';
import useForm from 'shared-lib/hook/useForm';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';
import useUpdateProduct from 'firebase-wrapper/firestore/useUpdateProduct';
import Button from 'shared-lib/button/Button';

const EditProductForm = ({ product, onUpdated }) => {
  const { cats, brands } = useGlobalState();
  const showMessage = useShowMessageDialog();
  const updateProduct = useUpdateProduct();
  const { form, onSubmit, disabled } = useForm({
    ...product
  }, values => {
    return showMessage(new Promise((resolve, reject) => {
      updateProduct(product, values)
        .then(() => {
          resolve(`Item [${product.id}] is updated.`);
          onUpdated();
        })
        .catch(reject);
    }), 'Updating');
  });
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <TextInput {...form('id')} label='ID' disabled={true} />
      <TextInput {...form('name')} label='Name' />
      <Dropdown {...form('category')} label='Category' options={cats} />
      <Dropdown {...form('brand')} label='Brand' options={brands} />
      <TextArea {...form('details')} label='Details' rows='10' />
      <TextInput {...form('in_stock')} label='Amount In Stock' type='number' min='0' />
      <ImageSelector {...form('images')} label='Images' multiple={true} />
    </Fieldset>
    <Button type='submit' disabled={disabled} loading={disabled}>submit</Button>
  </Form>;
};

export default EditProductForm;