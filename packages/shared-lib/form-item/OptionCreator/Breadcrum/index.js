import React, { useCallback } from 'react';
import Button from '../../../button/Button';
import HomeIcon from '../../../icon/HomeIcon';
import RowLayout from '../../../layout/RowLayout';
import Space from '../../../layout/Space';

const Breadcrum = ({ names, onClick }) => {
  const onHomeClick = useCallback(() => {
    if (names.length > 0) {
      onClick(0);
    }
  }, [names.length, onClick]);
  return <RowLayout>
    <Button type='button' icon={<HomeIcon />} bg={names.length === 0 ? undefined : 'lightgrey'} onClick={onHomeClick} />
    {names.map((text, index, readOnly) => {
      return <Button key={text} type='button' bg={index === readOnly.length - 1 ? undefined : 'lightgrey'} onClick={() => {
        onClick(index + 1);
      }}>{text}</Button>;
    })}
    <Space />
  </RowLayout>;
};

export default Breadcrum;