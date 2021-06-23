import { isObject } from 'lodash/lang';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../../button/Button';
import useForm from '../../hook/useForm';
import CardContainer from '../../layout/CardContainer';
import CenterDiv from '../../layout/CenterDiv';
import MarginCard from '../../layout/MarginCard';
import RowLayout from '../../layout/RowLayout';
import Space from '../../layout/Space';
import Form from '../Form';
import FormItemContainer from '../FormItemContainer';
import InsideContainer from '../InsideContainer';
import Label from '../Label';
import assignObj from './assignObj';
import Breadcrum from './Breadcrum';
import optionLevelString from './optionLevelString';
import SubOptionForm from './SubOptionForm';
import useHandleSubOptionNameChange from './useHandleSubOptionNameChange';

const OptionCreator = ({ value, handleChange, error, name, label }) => {
  const [stack, setStack] = useState([]);
  const handleAddOption = useCallback(() => {
    handleChange(name, oldValue => {
      const newValue = { ...oldValue };
      assignObj([...stack], newValue, {
        name: '',
        isSub: true,
        subOptions: []
      });
      return newValue;
    });
  }, [handleChange, name, stack]);
  const options = useMemo(() => {
    var temp = value;
    for (let i = 0; i < stack.length; i++) {
      temp = temp.subOptions[stack[i]];
    }
    return temp;
  }, [stack, value]);
  const handleSubOptionNameChange = useHandleSubOptionNameChange(stack, handleChange, name);
  const onSelect = useCallback((index) => {
    setStack([...stack, index]);
  }, [stack]);
  const onBreadcrumClick = useCallback((amount) => {
    const newStack = [];
    for (let i = 0; i < amount; i++) {
      newStack.push(stack[i]);
    }
    setStack(newStack);
  }, [stack]);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <InsideContainer>
      <RowLayout>
        <Space>
          <Breadcrum names={optionLevelString(stack, value)} onClick={onBreadcrumClick} />
        </Space>
        <Button type='button' onClick={handleAddOption}>Add Option</Button>
      </RowLayout>
      {options && options.isSub ?
        <>
          {
            options.subOptions.map((subOpt, index) => {
              return <SubOptionForm key={index} index={index} value={subOpt.name} handleSubOptionNameChange={handleSubOptionNameChange} onSelect={onSelect} />;
            })
          }
        </>
        :
        <div>Not Is Sub</div>
      }
    </InsideContainer>
  </FormItemContainer>;
};

export default OptionCreator;