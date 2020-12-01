import React from 'react';
import DialogContainer from '../DialogContainer';
import DimBackground from '../DimBackground';

const DialogScreen = ({ dialogs, removeDialog }) => {
  const onTransitionEnd = React.useCallback(() => {
    if (dialogs.length > 0 && !dialogs[0].show) removeDialog();
  }, [dialogs, removeDialog]);
  return <DimBackground show={dialogs.length > 0 && dialogs[0].show} onTransitionEnd={onTransitionEnd}>
    {dialogs.length > 0 &&
      <DialogContainer>
        {dialogs[0].render}
      </DialogContainer>
    }
  </DimBackground>;
};

export default DialogScreen;