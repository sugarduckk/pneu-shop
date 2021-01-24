import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import Selection from 'shared-lib/form-item/Selection';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import RowLayout from 'shared-lib/layout/RowLayout';
import Space from 'shared-lib/layout/Space';
import errorToMessage from 'shared-lib/util/errorToMessage';
import useSearchAddress from '../../../algolia-wrapper/hook/useSearchAddress';
import useAddAddress from '../../../firebase-wrapper/firestore/useAddAddress';

const OptionCard = ({ option }) => {
  const { tambon_th, district_th, province_th } = option;
  return <div>{`${tambon_th}, ${district_th}, ${province_th}`}</div>;
};

const AddressFormDialog = ({ address }) => {
  const { user } = useGlobalState();
  const { tambon_th, district_th, province_th, post_code } = address;
  const addAddress = useAddAddress(user.uid);
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const handleSubmit = React.useCallback(values => {
    return addAddress(values)
      .then(() => {
        updateDialog(<MessageDialog message='Address Added' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [addAddress, updateDialog]);
  const { form, onSubmit, disabled } = useForm({
    address: '',
    tambon: tambon_th,
    district: district_th,
    province: province_th,
    post_code: post_code
  }, handleSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <TextInput {...form('address')} label='ที่อยู่' />
      <TextInput {...form('tambon')} label='แขวง/ตำบล' />
      <TextInput {...form('district')} label='เขต/อำเภอ' />
      <TextInput {...form('province')} label='จังหวัด' />
      <TextInput {...form('post_code')} label='เลขไปรษณีย์' />
    </Fieldset>
    <RowLayout>
      <Space />
      <Button bg='red' type='button' onClick={dismissDialog}>dismiss</Button>
      <Button type='submit'>confirm</Button>
    </RowLayout>
  </Form>;
};

const SelectAddressDialog = ({ result }) => {
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const handleSubmit = React.useCallback(values => {
    updateDialog(<AddressFormDialog address={values.address} />);
  }, [updateDialog]);
  const { form, onSubmit, disabled } = useForm({
    address: {}
  }, handleSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <Selection {...form('address')} label='Select address' options={result.hits} OptionCard={OptionCard} />
    </Fieldset>
    <RowLayout>
      <Space />
      <Button bg='red' type='button' onClick={dismissDialog}>dismiss</Button>
      <Button type='submit'>confirm</Button>
    </RowLayout>
  </Form>;
};

const PostCodeFormDialog = () => {
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const searchAddress = useSearchAddress();
  const handleSubmit = React.useCallback(values => {
    return searchAddress(values.post_code)
      .then(result => {
        updateDialog(<SelectAddressDialog result={result} />);
      });
  }, [searchAddress, updateDialog]);
  const { form, onSubmit, disabled } = useForm({
    post_code: ''
  }, handleSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <TextInput {...form('post_code')} label='Postal code' />
    </Fieldset>
    <RowLayout>
      <Space />
      <Button disabled={disabled} bg='red' type='button' onClick={dismissDialog}>Dismiss</Button>
      <Button disabled={disabled} loading={disabled} type='submit'>search</Button>
    </RowLayout>
  </Form>;
};

const useShowAddressFormDialog = () => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<PostCodeFormDialog />);
  }, [addDialog]);
};

export default useShowAddressFormDialog;