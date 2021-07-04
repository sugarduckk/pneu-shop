import React from 'react';
import FormItemContainer from '../FormItemContainer';
import InputCheckbox from './InputCheckbox';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';

const Checkbox = ({ value, handleChange, error, name, label, autocomplete, ...otherProps }) => {
  const onChange = React.useCallback(e => {
    handleChange(name, e.target.checked);
  }, [handleChange, name]);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <InputCheckbox id={label} checked={value} onChange={onChange} type="checkbox" {...otherProps} />
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </FormItemContainer>;
};

export default Checkbox;