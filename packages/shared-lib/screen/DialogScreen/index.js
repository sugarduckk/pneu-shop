import React from 'react';
import { useDismissDialog } from 'redux-wrapper/action';
import CrossIcon from '../../icon/CrossIcon';
import DialogContainer from '../DialogContainer';
import DimBackground from '../DimBackground';
import CloseContainer from './CloseContainer';

const DialogScreen = ({ dialogs, removeDialog }) => {
  const dismissDialog = useDismissDialog();
  const onTransitionEnd = React.useCallback(() => {
    if (dialogs.length > 0 && !dialogs[0].show) removeDialog();
  }, [dialogs, removeDialog]);
  return <DimBackground show={dialogs.length > 0 && dialogs[0].show} onTransitionEnd={onTransitionEnd}>
    {dialogs.length > 0 &&
      <>
        <DialogContainer>
          {dialogs[0].render}
        </DialogContainer>
        <CloseContainer onClick={dismissDialog}>
          <CrossIcon fill='grey' />
        </CloseContainer>
      </>
    }
  </DimBackground>;
};

export default DialogScreen;