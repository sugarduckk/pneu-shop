import React from 'react';
import ButtonContainer from './ButtonContainer';
import ButtonIconContainer from './ButtonIconContainer';
import ButtonLoading from './ButtonLoading';

const Button = ({ children, loading, icon, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>
    {loading ? <ButtonLoading />
      :
      <>
        {icon && <ButtonIconContainer>{icon}</ButtonIconContainer>}
        <span>{children}</span>
      </>}
  </ButtonContainer>;
};

export default Button;