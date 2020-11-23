import React from 'react';
import ButtonLoading from './ButtonLoading';
import DialogButtonContainer from './DialogButtonContainer';

const DialogButton = ({ children, loading, ...otherProps }) => {
  return <DialogButtonContainer {...otherProps}>
    {loading ? <ButtonLoading /> : children}
  </DialogButtonContainer>;
};

export default DialogButton;