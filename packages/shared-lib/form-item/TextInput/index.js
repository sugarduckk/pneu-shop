import React from 'react';
import FormItemContainer from '../FormItemContainer';
import Input from './Input';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';

const TextInput = ({ value, handleChange, error, name, label, type, autocomplete, ...otherProps }) => {
  const onChange = React.useCallback(e => {
    if (type === 'number') {
      handleChange(name, parseInt(e.target.value || 0));
    }
    else {
      handleChange(name, e.target.value);
    }
  }, [handleChange, name, type]);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <Input id={label} value={value} onChange={onChange} type={type} autocomplete={autocomplete} {...otherProps} />
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </FormItemContainer>;
};

export default TextInput;