import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import Dropdown from 'shared-lib/form-item/Dropdown';
import TextArea from 'shared-lib/form-item/TextArea';
import Button from 'shared-lib/button/Button';
import useAddSingleItem from 'firebase-wrapper/firestore/useAddSingleItem';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import ImageSelector from 'shared-lib/form-item/ImageSelector';

const AddSingle = props => {
  const { cats, brands } = useGlobalState();
  const addSingleItem = useAddSingleItem();
  const showMessage = useShowMessageDialog();
  const { form, onSubmit, disabled, setValues } = useForm({
    id: '',
    name: '',
    details: '',
    category: cats[0].value,
    brand: brands[0].value,
    in_stock: 0,
    images: []
  }, values => {
    return showMessage(new Promise((resolve, reject) => {
      addSingleItem(values)
        .then(() => {
          setValues(pre => {
            return {
              ...pre,
              images: []
            };
          });
          resolve(`Item [${values.id}] is uploaded.`);
        })
        .catch(reject);
    }), 'Uploading');
  });
  return <>
    <H1>Add single product</H1>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('id')} label='ID' />
        <TextInput {...form('name')} label='Name' />
        <Dropdown {...form('category')} label='Category' options={cats} />
        <Dropdown {...form('brand')} label='Brand' options={brands} />
        <TextArea {...form('details')} label='Details' rows='10' />
        <TextInput {...form('in_stock')} label='Amount In Stock' type='number' min='0' />
        <ImageSelector {...form('images')} label='Images' multiple={true} />
      </Fieldset>
      <Button type='submit' >submit</Button>
    </Form>
  </>;
};

export default AddSingle;