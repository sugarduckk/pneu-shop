import React from 'react';
import ButtonLoading from './ButtonLoading';
import DialogButtonContainer from './DialogButtonContainer';

const DialogButton = ({ children, loading, onClick, ...otherProps }) => {
  const onClickNoPropagate = React.useCallback(e => {
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  }, [onClick]);
  return <DialogButtonContainer onClick={onClickNoPropagate} {...otherProps}>
    {loading ? <ButtonLoading /> : children}
  </DialogButtonContainer>;
};

export default DialogButton;