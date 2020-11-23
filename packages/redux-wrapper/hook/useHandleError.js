import React from 'react';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';
import errorToMessage from 'shared-lib/util/errorToMessage';

const useHandleError = () => {
  const showMessageDialog = useShowMessageDialog();
  return React.useCallback(error => {
    showMessageDialog(errorToMessage(error));
  }, [showMessageDialog]);
};

export default useHandleError;