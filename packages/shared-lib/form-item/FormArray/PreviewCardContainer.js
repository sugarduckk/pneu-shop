import React from 'react';
import Button from '../../button/Button';
import CardContainer from '../../layout/CardContainer';
import Space from '../../layout/Space';

const PreviewCardContainer = ({ values, index, total, PreviewCard, handleDelete, handleUpClick, handleDownClick }) => {
  const onUpClick = React.useCallback(() => {
    handleUpClick(index);
  }, [handleUpClick, index]);
  const onDownClick = React.useCallback(() => {
    handleDownClick(index);
  }, [handleDownClick, index]);
  const onDeleteClick = React.useCallback(() => {
    handleDelete(index);
  }, [handleDelete, index]);
  return <CardContainer row={true}>
    <PreviewCard values={values} />
    <Space />
    {index > 0 && <Button type='button' onClick={onUpClick}>Up</Button>}
    {index < total - 1 && <Button type='button' onClick={onDownClick}>Down</Button>}
    <Button type='button' onClick={onDeleteClick} bg='red'>Delete</Button>
  </CardContainer>;
};

export default PreviewCardContainer;