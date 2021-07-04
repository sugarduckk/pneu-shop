import React from 'react';
import renameOption from './renameOption';

const useHandleSubOptionNameChange = (stack, handleChange, name) => React.useCallback((newName, index) => {
  handleChange(name, oldValue => {
    const newValue = { ...oldValue };
    renameOption([...stack], newValue, newName, index);
    return newValue;
  });
}, [stack, handleChange, name]);

export default useHandleSubOptionNameChange;