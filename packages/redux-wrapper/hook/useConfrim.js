import React from 'react'
import errorToMessage from 'shared-lib/util/errorToMessage'
import { useUpdateDialog } from '../action'
import useShowConfirmDialog from './useShowConfirmDialog'
import { MessageDialog } from './useShowMessageDialog'

const useConfirm = (promise, confirmMessage, doneMessage, then) => {
  const updateDialog = useUpdateDialog()
  const onConfirm = React.useCallback(() => {
    return promise()
      .then(() => {
        updateDialog(<MessageDialog message={doneMessage} showDismiss={true} />)
        if (then) {
          then()
        }
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />)
      })
  }, [doneMessage, promise, updateDialog, then])
  const showConfirmDialog = useShowConfirmDialog(onConfirm)
  return React.useCallback(() => {
    showConfirmDialog({
      message: confirmMessage
    })
  }, [confirmMessage, showConfirmDialog])
}

export default useConfirm