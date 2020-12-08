import React from 'react';
import DropdownIcon from '../../icon/DropdownIcon';
import FormItemContainer from '../FormItemContainer';
import FormItemErrorMessage from '../FormItemErrorMessage';
import Label from '../Label';
import DropIconContainer from './DropIconContainer';
import SelectedButton from './SelectedButton';
import useShowOptionDialog from './useShowOptionDialog';

const DialogSelection = ({ value, handleChange, error, name, label, options, ...otherProps }) => {
  const index = React.useMemo(() => {
    return options.findIndex(option => {
      return JSON.stringify(option.value) === JSON.stringify(value);
    });
  }, [options, value]);
  const onOptionClick = React.useCallback(index => {
    handleChange(name, options[index].value);
  }, [handleChange, name, options]);
  const showOptionDialog = useShowOptionDialog(options, onOptionClick, index);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <SelectedButton onClick={showOptionDialog}>
      {options[index].label}
      <DropIconContainer>
        <DropdownIcon fill='black' />
      </DropIconContainer>
    </SelectedButton>
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </FormItemContainer>;
};

export default DialogSelection;