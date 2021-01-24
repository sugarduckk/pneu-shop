import React from 'react';
import ButtonContainer from './ButtonContainer';
import ButtonIconContainer from './ButtonIconContainer';
import ButtonLoading from './ButtonLoading';
import ButtonTextContainer from './ButtonTextContainer';

const Button = ({ onClick, children, loading, icon, ...otherProps }) => {
  const onClickNoPropagate = React.useCallback(e => {
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  }, [onClick]);
  return <ButtonContainer onClick={onClickNoPropagate} {...otherProps}>
    {loading ? <ButtonLoading />
      :
      <>
        {icon && <ButtonIconContainer>{icon}</ButtonIconContainer>}
        {children && <ButtonTextContainer>{children}</ButtonTextContainer>}
      </>}
  </ButtonContainer>;
};

export default Button;