import React from 'react';
import FormItemContainer from '../FormItemContainer';
import Textarea from './Textarea';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';

const TextArea = ({ value, handleChange, error, name, label, ...otherProps }) => {
  const onChange = React.useCallback(e => {
    handleChange(name, e.target.value);
  }, [handleChange, name]);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <Textarea id={label} value={value} onChange={onChange} {...otherProps} />
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </FormItemContainer>;
};

export default TextArea;