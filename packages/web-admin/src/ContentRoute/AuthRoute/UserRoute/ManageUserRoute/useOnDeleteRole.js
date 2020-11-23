import React from 'react';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import useHttpsCallable from 'firebase-wrapper/function/useHttpsCallable';
import { useUpdateDialog } from 'redux-wrapper/action';
import errorToMessage from 'shared-lib/util/errorToMessage';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';

const useOnDeleteRole = (email, uid) => {
  const updateDialog = useUpdateDialog();
  const deleteUserWithRole = useHttpsCallable('deleteUserWithRole');
  const showDeleteConfirm = useShowConfirmDialog(payload => {
    return deleteUserWithRole({ uid: payload.uid })
      .then(() => {
        updateDialog(<MessageDialog message={`${email} is now deleted.`} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  });
  return React.useCallback(e => {
    showDeleteConfirm({
      message: `Are you sure to delete ${email}?`,
      payload: {
        uid
      }
    });
  }, [showDeleteConfirm, email, uid]);
};

export default useOnDeleteRole;