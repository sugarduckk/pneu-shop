import React from 'react';
import DialogContentLayout from 'shared-lib/layout/DialogContentLayout';
import DialogButtonLayout from 'shared-lib/layout/DialogButtonLayout';
import DialogButton from 'shared-lib/button/DialogButton';
import { useAddDialog, useUpdateDialog, useDismissDialog } from '../action';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import CenterDiv from 'shared-lib/layout/CenterDiv';
import errorToMessage from 'shared-lib/util/errorToMessage';

export const MessageDialog = ({ message, showDismiss }) => {
  const dismissDialog = useDismissDialog();
  return <div>
    <DialogContentLayout>
      {message}
    </DialogContentLayout>
    {showDismiss && <DialogButtonLayout>
      <DialogButton onClick={dismissDialog}>dismiss</DialogButton>
    </DialogButtonLayout>}
  </div>;
};

const useShowMessageDialog = () => {
  const addDialog = useAddDialog();
  const updateDialog = useUpdateDialog();
  return React.useCallback((getMessage, loadingText, showDismiss = true) => {
    addDialog(<>
      <DialogLoading />
      {loadingText && <CenterDiv>{loadingText}</CenterDiv>}
    </>);
    Promise.resolve(getMessage)
      .then(message => {
        updateDialog(<MessageDialog message={message} showDismiss={showDismiss} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={showDismiss} />);
      });
  }, [addDialog, updateDialog]);
};

export default useShowMessageDialog;