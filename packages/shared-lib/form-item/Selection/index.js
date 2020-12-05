import React from 'react';
import FormItemContainer from '../FormItemContainer';
import InsideContainer from '../InsideContainer';
import Label from '../Label';
import SelectionCard from './SelectionCard';

const Selection = ({ value, handleChange, error, name, label, options, OptionCard, ...otherProps }) => {
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <InsideContainer>
      {(options && options.length > 0) && options.map((option, optionIndex) => {
        return <SelectionCard
          key={optionIndex}
          name={name}
          option={option}
          selected={JSON.stringify(value) === JSON.stringify(option)}
          handleChange={handleChange}
          OptionCard={OptionCard}
        />;
      })}
    </InsideContainer>
  </FormItemContainer>;
};

export default Selection;