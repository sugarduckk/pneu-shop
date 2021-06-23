import useRejectOrder from 'firebase-wrapper/firestore/useRejectOrder';
import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import TextArea from 'shared-lib/form-item/TextArea';
import useForm from 'shared-lib/hook/useForm';
import RowLayout from 'shared-lib/layout/RowLayout';
import Space from 'shared-lib/layout/Space';
import errorToMessage from 'shared-lib/util/errorToMessage';

const RejectOrderDialog = ({ ownerId, orderId }) => {
  const dismiss = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const rejectOrder = useRejectOrder(ownerId, orderId);
  const handleSubmit = React.useCallback(values => {
    return rejectOrder(values.reason)
      .then(() => {
        updateDialog(<MessageDialog message='Order rejected!' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [rejectOrder, updateDialog]);
  const { form, onSubmit, disabled } = useForm({
    reason: ''
  }, handleSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <TextArea {...form('reason')} label='Reason for rejecting' />
    </Fieldset>
    <RowLayout>
      <Space />
      <Button disabled={disabled} bg='red' type='button' onClick={dismiss}>dismiss</Button>
      <Button disabled={disabled} loading={disabled} type='submit'>confirm reject</Button>
    </RowLayout>
  </Form>;
};

const useShowRejectOrderDialog = (ownerId, orderId) => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<RejectOrderDialog ownerId={ownerId} orderId={orderId} />);
  }, [addDialog, ownerId, orderId]);
};

export default useShowRejectOrderDialog;