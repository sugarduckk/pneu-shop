import React from 'react';
import ButtonContainer from './ButtonContainer';
import ButtonLoading from './ButtonLoading';

const Button = ({ children, loading, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>
    {loading ? <ButtonLoading /> : children}
  </ButtonContainer>;
};

export default Button;