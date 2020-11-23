import React from 'react';
import FormItemContainer from '../FormItemContainer';
import Select from './Select';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';

const Dropdown = ({ value, handleChange, error, name, label, options, ...otherProps }) => {
  const onChange = React.useCallback(e => {
    handleChange(name, e.target.value);
  }, [handleChange, name]);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <Select id={label} value={value} onChange={onChange} {...otherProps}>
      {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </Select>
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </FormItemContainer>;
};

export default Dropdown;