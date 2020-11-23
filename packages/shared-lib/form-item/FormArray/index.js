import React from 'react';
import CardContainer from '../../layout/CardContainer';
import FormItemContainer from '../FormItemContainer';
import InsideContainer from '../InsideContainer';
import Label from '../Label';
import PreviewCardContainer from './PreviewCardContainer';

const FormArray = ({ value, handleChange, error, name, label, SubForm, PreviewCard }) => {
  const handleAdd = React.useCallback(values => {
    handleChange(name, pre => {
      return [...pre, values];
    });
  }, [handleChange, name]);
  const handleDelete = React.useCallback(index => {
    handleChange(name, pre => {
      const newValue = [...pre];
      newValue.splice(index, 1);
      return newValue;
    });
  }, [handleChange, name]);
  const handleUpClick = React.useCallback(index => {
    handleChange(name, pre => {
      const newValue = [...pre];
      var temp = newValue[index];
      newValue[index] = newValue[index - 1];
      newValue[index - 1] = temp;
      return newValue;
    });
  }, [handleChange, name]);
  const handleDownClick = React.useCallback(index => {
    handleChange(name, pre => {
      const newValue = [...pre];
      var temp = newValue[index];
      newValue[index] = newValue[index + 1];
      newValue[index + 1] = temp;
      return newValue;
    });
  }, [handleChange, name]);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <InsideContainer>
      <CardContainer>
        {value.map((values, index, r) => {
          return <PreviewCardContainer key={index} index={index} total={r.length} values={values} PreviewCard={PreviewCard} handleDelete={handleDelete} handleUpClick={handleUpClick} handleDownClick={handleDownClick} />;
        })}
      </CardContainer>
      <SubForm handleAdd={handleAdd} />
    </InsideContainer>
  </FormItemContainer>;
};

export default FormArray;