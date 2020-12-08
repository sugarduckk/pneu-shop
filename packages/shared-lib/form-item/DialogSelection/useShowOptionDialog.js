import React from 'react';
import { useAddDialog, useDismissDialog } from 'redux-wrapper/action';
import Button from '../../button/Button';
import OptionCardContainer from '../Selection/OptionCardContainer';

const OptionCard = ({ option, index, onOptionClick, selectedIndex, setCurrentIndex }) => {
  const dismissDialog = useDismissDialog();
  const onClick = React.useCallback(() => {
    setCurrentIndex(index);
    onOptionClick(index);
    dismissDialog();
  }, [index, onOptionClick, dismissDialog, setCurrentIndex]);
  return <OptionCardContainer onClick={onClick} selected={selectedIndex === index}>
    {option.label}
  </OptionCardContainer>;
};

const OptionDialog = ({ options, onOptionClick, selectedIndex }) => {
  const [currentIndex, setCurrentIndex] = React.useState(selectedIndex);
  const dismissDialog = useDismissDialog();
  return <>
    {options && options.map((option, optionIndex) => {
      return <OptionCard key={option.label} option={option} index={optionIndex} onOptionClick={onOptionClick} selectedIndex={currentIndex} setCurrentIndex={setCurrentIndex} />;
    })}
    <Button onClick={dismissDialog} bg='red'>dismiss</Button>
  </>;
};

const useShowOptionDialog = (options, onOptionClick, selectedIndex) => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<OptionDialog options={options} onOptionClick={onOptionClick} selectedIndex={selectedIndex} />);
  }, [addDialog, onOptionClick, options, selectedIndex]);
};

export default useShowOptionDialog;