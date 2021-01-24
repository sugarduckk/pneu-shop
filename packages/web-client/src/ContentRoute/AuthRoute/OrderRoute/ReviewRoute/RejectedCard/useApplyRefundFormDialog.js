import useApplyRefund from 'firebase-wrapper/firestore/useApplyRefund';
import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import DialogButton from 'shared-lib/button/DialogButton';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import Selection from 'shared-lib/form-item/Selection';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import errorToMessage from 'shared-lib/util/errorToMessage';

const RefuncTypeOptions = [
  {
    label: 'Bank Account',
    value: 'bank_account'
  },
  {
    label: 'Promptpay',
    value: 'promptpay'
  }
];

const OptionCard = ({ option }) => {
  return <div>{option.label}</div>;
};

const ApplyRefundFormDialog = ({ orderId }) => {
  const { user } = useGlobalState();
  const dismiss = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const applyRefund = useApplyRefund(user.uid, orderId);
  const onFormSubmit = React.useCallback(values => {
    const {
      refund_type,
      bank_account,
      bank_name,
      account_name,
      bank_branch,
      promptpay,
      promptpay_name
    } = values;
    var refundDetail = {
      type: refund_type
    };
    if (refund_type === 'bank_account') {
      refundDetail.bank_account = bank_account;
      refundDetail.bank_name = bank_name;
      refundDetail.account_name = account_name;
      refundDetail.bank_branch = bank_branch;
    }
    else if (refund_type === 'promptpay') {
      refundDetail.promptpay = promptpay;
      refundDetail.promptpay_name = promptpay_name;
    }
    return applyRefund(refundDetail)
      .then(() => {
        updateDialog(<MessageDialog message={'Refund applied.'} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [applyRefund, updateDialog]);
  const { form, onSubmit, disabled, values } = useForm({
    refund_type: RefuncTypeOptions[0],
    bank_account: '',
    bank_name: '',
    account_name: '',
    bank_branch: '',
    promptpay: '',
    promptpay_name: ''
  }, onFormSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <Selection {...form('refund_type')} label='Refund channel' options={RefuncTypeOptions} OptionCard={OptionCard} />
      {values.refund_type.value === 'bank_account' && <>
        <TextInput {...form('bank_account')} label='Bank account' />
        <TextInput {...form('bank_name')} label='Bank name' />
        <TextInput {...form('account_name')} label='Account Name' />
        <TextInput {...form('bank_branch')} label='Bank branch' />
      </>}
      {values.refund_type.value === 'promptpay' && <>
        <TextInput {...form('promptpay')} label='Promptpay' />
        <TextInput {...form('promptpay_name')} label='Name' />
      </>}
    </Fieldset>
    <DialogButtonLayout>
      <DialogButton type='button' bg='red' disabled={disabled} onClick={dismiss}>dismiss</DialogButton>
      <DialogButton type='submit' disabled={disabled} loading={disabled}>submit</DialogButton>
    </DialogButtonLayout>
  </Form>;
};

const useApplyRefundFormDialog = (orderId) => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<ApplyRefundFormDialog orderId={orderId} />);
  }, [addDialog, orderId]);
};

export default useApplyRefundFormDialog;