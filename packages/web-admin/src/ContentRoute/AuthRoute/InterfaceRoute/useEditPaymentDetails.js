import useSetPaymentDetails from 'firebase-wrapper/firestore/useSetPaymentDetails';
import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import RowLayout from 'shared-lib/layout/RowLayout';
import Space from 'shared-lib/layout/Space';
import errorToMessage from 'shared-lib/util/errorToMessage';

const EditPaymentDetailsDialog = () => {
  const { config } = useGlobalState();
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const setPaymentDetails = useSetPaymentDetails();
  const handleSubmit = React.useCallback(values => {
    return setPaymentDetails(values)
      .then(() => {
        updateDialog(<MessageDialog message='Payment details are updated.' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [setPaymentDetails, updateDialog]);
  const { form, onSubmit, disabled } = useForm({
    accountName: (config && config.paymentDetails && config.paymentDetails.accountName) || '',
    bankName: (config && config.paymentDetails && config.paymentDetails.bankName) || '',
    bankBranch: (config && config.paymentDetails && config.paymentDetails.bankBranch) || '',
    accountNum: (config && config.paymentDetails && config.paymentDetails.accountNum) || ''
  }, handleSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <TextInput {...form('accountName')} label='Account Name' />
      <TextInput {...form('bankName')} label='Bank Name' />
      <TextInput {...form('bankBranch')} label='Bank Branch' />
      <TextInput {...form('accountNum')} label='Account Number' />
    </Fieldset>
    <RowLayout>
      <Space />
      <Button disabled={disabled} type='button' onClick={dismissDialog} bg='red'>dismiss</Button>
      <Button disabled={disabled} loading={disabled} >confirm</Button>
    </RowLayout>
  </Form>;
};

const useEditPaymentDetails = () => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<EditPaymentDetailsDialog />);
  }, [addDialog]);
};

export default useEditPaymentDetails;