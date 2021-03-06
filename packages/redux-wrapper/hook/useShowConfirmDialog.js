import React from 'react';
import DialogButton from 'shared-lib/button/DialogButton';
import CenterDiv from 'shared-lib/layout/CenterDiv';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogContentLayout from 'shared-lib/layout/DialogContentLayout';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import errorToMessage from 'shared-lib/util/errorToMessage';
import { useAddDialog, useDismissDialog, useUpdateDialog } from '../action';
import { MessageDialog } from './useShowMessageDialog';

const ConfirmDialog = ({ message, payload, onConfirm }) => {
  const [loading, setLoading] = React.useState(false);
  const dismissDialog = useDismissDialog();
  return <div>
    <DialogContentLayout>
      {message}
    </DialogContentLayout>
    <DialogButtonLayout>
      <DialogButton bg='red' disabled={loading} onClick={dismissDialog}>dismiss</DialogButton>
      <DialogButton disabled={loading} loading={loading} onClick={() => {
        setLoading(true);
        Promise.resolve(onConfirm(payload));
      }}>confirm</DialogButton>
    </DialogButtonLayout>
  </div>;
};

const useShowConfirmDialog = (onConfirm, fromDialog = false) => {
  const addDialog = useAddDialog();
  const updateDialog = useUpdateDialog();
  return React.useCallback((getMessagePayload, loadingText) => {
    if (fromDialog) {
      updateDialog(<>
        <DialogLoading />
        {loadingText && <CenterDiv>{loadingText}</CenterDiv>}
      </>);
    }
    else {
      addDialog(<>
        <DialogLoading />
        {loadingText && <CenterDiv>{loadingText}</CenterDiv>}
      </>);
    }
    Promise.resolve(getMessagePayload)
      .then(({ message, payload }) => {
        updateDialog(<ConfirmDialog message={message} payload={payload} onConfirm={onConfirm} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [addDialog, updateDialog, onConfirm, fromDialog]);
};

export default useShowConfirmDialog;