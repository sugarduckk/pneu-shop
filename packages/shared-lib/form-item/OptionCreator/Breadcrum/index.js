import React from 'react';
import Button from '../../../button/Button';
import MarginCard from "../../../layout/MarginCard";
import RowLayout from '../../../layout/RowLayout';
import Space from '../../../layout/Space';

const Breadcrum = ({ names, onClick }) => {
  return <RowLayout>
    <Button type='button' bg={names.length === 0 ? undefined : 'lightgrey'} onClick={() => {
      onClick(0);
    }}>Root</Button>
    {names.map((text, index, readOnly) => {
      return <Button key={text} type='button' bg={index === readOnly.length - 1 ? undefined : 'lightgrey'} onClick={() => {
        onClick(index + 1);
      }}>{text}</Button>;
    })}
    <Space />
  </RowLayout>;
};

export default Breadcrum;