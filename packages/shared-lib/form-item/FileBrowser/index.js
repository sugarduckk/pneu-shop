import React from 'react';
import FormItemContainer from '../FormItemContainer';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';

const FileBrowser = ({ value, handleChange, error, name, label, ...otherProps }) => {
  const onChange = React.useCallback(e => {
    handleChange(name, e.target.files);
  }, [handleChange, name]);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <input id={label} onChange={onChange} type='file' {...otherProps} />
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </FormItemContainer>;
};

export default FileBrowser;