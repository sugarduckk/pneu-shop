import useSetContact from 'firebase-wrapper/firestore/useSetContact';
import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import Legend from 'shared-lib/form-item/Legend';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import CardContainer from 'shared-lib/layout/CardContainer';
import Space from 'shared-lib/layout/Space';
import errorToMessage from 'shared-lib/util/errorToMessage';

const EditContact = props => {
  const { config } = useGlobalState();
  console.log(config);
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const setContact = useSetContact();
  const handleSubmit = React.useCallback(values => {
    return setContact(values)
      .then(() => {
        updateDialog(<MessageDialog message='Contact is updated.' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [setContact, updateDialog]);
  const { form, onSubmit, disabled } = useForm({
    tel: (config && config.contact && config.contact.tel) || '',
    email: (config && config.contact && config.contact.email) || '',
    address: (config && config.contact && config.contact.address) || '',
    line: (config && config.contact && config.contact.line) || '',
    facebook: (config && config.contact && config.contact.facebook) || '',
  }, handleSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <Legend>Contact</Legend>
      <TextInput {...form('tel')} label='Telephone' />
      <TextInput {...form('email')} label='Email' />
      <TextInput {...form('address')} label='Address' />
      <TextInput {...form('line')} label='Line' />
      <TextInput {...form('facebook')} label='Facebook' />
    </Fieldset>
    <CardContainer row={true}>
      <Space />
      <Button type='button' bg='red' disabled={disabled} onClick={dismissDialog}>dismiss</Button>
      <Button type='submit' disabled={disabled} loading={disabled}>confirm</Button>
    </CardContainer>
  </Form>;
};

const useEditContact = () => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<EditContact />);
  }, [addDialog]);
};

export default useEditContact;