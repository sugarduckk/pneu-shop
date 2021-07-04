import React, { useCallback } from 'react';
import Button from '../../button/Button';
import useForm from '../../hook/useForm';
import CardContainer from '../../layout/CardContainer';
import RowLayout from '../../layout/RowLayout';
import FormItemContainer from '../FormItemContainer';
import TextInput from '../TextInput';

const SubOptionForm = ({ index, value, handleSubOptionNameChange, onSelect, onRemove }) => {
  const handleChange = React.useCallback((name, newValue) => {
    handleSubOptionNameChange(newValue, index);
  }, [index, handleSubOptionNameChange]);
  const onOptionClick = useCallback(() => {
    onSelect(index);
  }, [onSelect, index]);
  const onRemoveClick = useCallback(() => {
    onRemove(index);
  }, [onRemove, index]);
  return <CardContainer>
    <RowLayout>
      <TextInput value={value} handleChange={handleChange} />
      <Button disabled={value === ""} type='button' onClick={onOptionClick}>select</Button>
      <Button type='button' bg='red' onClick={onRemoveClick}>remove</Button>
    </RowLayout>
  </CardContainer>;
};

export default SubOptionForm;