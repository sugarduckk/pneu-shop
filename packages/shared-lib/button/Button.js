import React from 'react';
import ButtonContainer from './ButtonContainer';
import ButtonIconContainer from './ButtonIconContainer';
import ButtonLoading from './ButtonLoading';
import ButtonTextContainer from './ButtonTextContainer';

const Button = ({ children, loading, icon, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>
    {loading ? <ButtonLoading />
      :
      <>
        {icon && <ButtonIconContainer>{icon}</ButtonIconContainer>}
        {children && <ButtonTextContainer>{children}</ButtonTextContainer>}
      </>}
  </ButtonContainer>;
};

export default Button;