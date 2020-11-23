import React from 'react';
import DialogContentLayout from 'shared-lib/layout/DialogContentLayout';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogButton from 'shared-lib/button/DialogButton';
import { useAddDialog, useUpdateDialog, useDismissDialog } from '../action';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import CenterDiv from 'shared-lib/layout/CenterDiv';
import { MessageDialog } from './useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';

const ConfirmDialog = ({ message, payload, onConfirm }) => {
  const [loading, setLoading] = React.useState(false);
  const dismissDialog = useDismissDialog();
  return <div>
    <DialogContentLayout>
      {message}
    </DialogContentLayout>
    <DialogButtonLayout>
      <DialogButton disabled={loading} onClick={dismissDialog}>dismiss</DialogButton>
      <DialogButton disabled={loading} loading={loading} onClick={() => {
        setLoading(true);
        Promise.resolve(onConfirm(payload));
      }}>confirm</DialogButton>
    </DialogButtonLayout>
  </div>;
};

const useShowConfirmDialog = (onConfirm) => {
  const addDialog = useAddDialog();
  const updateDialog = useUpdateDialog();
  return React.useCallback((getMessagePayload, loadingText) => {
    addDialog(<>
      <DialogLoading />
      {loadingText && <CenterDiv>{loadingText}</CenterDiv>}
    </>);
    Promise.resolve(getMessagePayload)
      .then(({ message, payload }) => {
        updateDialog(<ConfirmDialog message={message} payload={payload} onConfirm={onConfirm} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [addDialog, updateDialog, onConfirm]);
};

export default useShowConfirmDialog;