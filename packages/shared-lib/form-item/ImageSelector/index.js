import React from 'react';
import FormItemContainer from '../FormItemContainer';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';
import ImagePreviewScreen from './ImagePreviewScreen';
import useBrowseFiles from './useBrowseFiles';
import Button from '../../button/Button';
import InsideContainer from '../InsideContainer';
import uuid from '../../util/uuid';
import RowLayout from '../../layout/RowLayout';

const ImageSelector = ({ value, handleChange, error, name, label, multiple, ...otherProps }) => {
  const onChange = React.useCallback(e => {
    let temp = [];
    Array.from(e.target.files).forEach(file => {
      temp.push({
        src: URL.createObjectURL(file),
        name: `${uuid()}.jpg`
      });
    });
    handleChange(name, value.length ? pre => ([...pre, ...temp]) : temp);
  }, [handleChange, name, value.length]);
  const browseFiles = useBrowseFiles(multiple, '.png,.jpg,.jpeg', onChange);
  const reset = React.useCallback(e => {
    handleChange(name, []);
  }, [handleChange, name]);
  const onLeftClick = React.useCallback(index => {
    handleChange(name, pre => {
      const newValue = [...pre];
      var temp = newValue[index];
      newValue[index] = newValue[index - 1];
      newValue[index - 1] = temp;
      return newValue;
    });
  }, [handleChange, name]);
  const onRightClick = React.useCallback(index => {
    handleChange(name, pre => {
      const newValue = [...pre];
      var temp = newValue[index];
      newValue[index] = newValue[index + 1];
      newValue[index + 1] = temp;
      return newValue;
    });
  }, [handleChange, name]);
  const onDefaultClick = React.useCallback(index => {
    handleChange(name, pre => {
      const newValue = [...pre];
      newValue.unshift(newValue.splice(index, 1)[0]);
      return newValue;
    });
  }, [handleChange, name]);
  const onCloseClick = React.useCallback(index => {
    handleChange(name, pre => {
      const newValue = [...pre];
      newValue.splice(index, 1);
      return newValue;
    });
  }, [handleChange, name]);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <InsideContainer>
      <RowLayout>
        <Button type='button' disabled={!multiple && value.length > 0} id={label} onClick={browseFiles}>{value.length === 0 ? 'browse images' : 'add images'}</Button>
        <Button type='button' disabled={value.length === 0} onClick={reset}>reset</Button>
      </RowLayout>
      <ImagePreviewScreen files={value} onLeftClick={onLeftClick} onRightClick={onRightClick} onDefaultClick={onDefaultClick} onCloseClick={onCloseClick} />
    </InsideContainer>
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </FormItemContainer>;
};

export default ImageSelector;