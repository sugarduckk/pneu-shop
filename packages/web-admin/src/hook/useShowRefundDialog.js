import useRefund from 'firebase-wrapper/firestore/useRefund'
import React from 'react'
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action'
import useGlobalState from 'redux-wrapper/hook/useGlobalState'
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog'
import Button from 'shared-lib/button/Button'
import Fieldset from 'shared-lib/form-item/Fieldset'
import Form from 'shared-lib/form-item/Form'
import ImageSelector from 'shared-lib/form-item/ImageSelector'
import useForm from 'shared-lib/hook/useForm'
import RowLayout from 'shared-lib/layout/RowLayout'
import Space from 'shared-lib/layout/Space'
import errorToMessage from 'shared-lib/util/errorToMessage'

const RefundDialog = ({ orderId }) => {
  const { user } = useGlobalState()
  const dismiss = useDismissDialog()
  const updateDialog = useUpdateDialog()
  const refund = useRefund(user.uid, orderId)
  const handleSubmit = React.useCallback(values => {
    return refund(values.refundSlips)
      .then(() => {
        updateDialog(<MessageDialog message='Order refunded!' showDismiss={true} />)
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />)
      })
  }, [refund, updateDialog])
  const { form, onSubmit, disabled } = useForm({
    refundSlips: []
  }, handleSubmit)
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <ImageSelector {...form('refundSlips')} label='Choose refund slips' />
    </Fieldset>
    <RowLayout>
      <Space />
      <Button disabled={disabled} bg='red' type='button' onClick={dismiss}>dismiss</Button>
      <Button disabled={disabled} loading={disabled} type='submit'>upload slips</Button>
    </RowLayout>
  </Form>
}

const useShowRefundDialog = (orderId) => {
  const addDialog = useAddDialog()
  return React.useCallback(() => {
    addDialog(<RefundDialog orderId={orderId} />)
  }, [addDialog, orderId])
}

export default useShowRefundDialog