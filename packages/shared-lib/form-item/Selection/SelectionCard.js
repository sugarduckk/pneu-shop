import React from 'react';
import CardContainer from '../../layout/CardContainer';
import OptionCardContainer from './OptionCardContainer';

const SelectionCard = ({ option, selected, handleChange, OptionCard, name }) => {
  const handleClick = React.useCallback(() => {
    handleChange(name, option);
  }, [handleChange, option, name]);
  return <CardContainer onClick={handleClick}>
    <OptionCardContainer selected={selected}>
      <OptionCard option={option} />
    </OptionCardContainer>
  </CardContainer>;
};

export default SelectionCard;