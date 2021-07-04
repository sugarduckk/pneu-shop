import React, { useCallback, useMemo, useState } from 'react';
import Button from '../../button/Button';
import PlusIcon from '../../icon/PlusIcon';
import RowLayout from '../../layout/RowLayout';
import Space from '../../layout/Space';
import PriceCard from '../../ui/ProductForm/PriceCard';
import PriceForm from '../../ui/ProductForm/PriceForm';
import Checkbox from '../Checkbox';
import FormArray from '../FormArray';
import FormItemContainer from '../FormItemContainer';
import InsideContainer from '../InsideContainer';
import Label from '../Label';
import assignObj from './assignObj';
import Breadcrum from './Breadcrum';
import optionLevelString from './optionLevelString';
import SubCategorySetting from './SubCategorySetting';
import SubOptionForm from './SubOptionForm';
import useHandleOptionRemove from './useHandleOptionRemove';
import useHandleSubOptionNameChange from './useHandleSubOptionNameChange';
import useOnAddCustomPrices from './useOnAddCustomPrices';
import useOnAddPrices from './useOnAddPrices';
import useOnCustomPricesChange from './useOnCustomPricesChange';
import useOnRemovePrices from './useOnRemovePrices';

const OptionCreator = ({ value, handleChange, error, name, label }) => {
  const [stack, setStack] = useState([]);
  const handleAddOption = useCallback(() => {
    handleChange(name, oldValue => {
      const newValue = { ...oldValue };
      assignObj([...stack], newValue, {
        name: '',
        isSub: false,
        subOptions: [],
        customPrices: false,
        prices: []
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
  const onRemove = useHandleOptionRemove(stack, handleChange, name);
  const onBreadcrumClick = useCallback((amount) => {
    const newStack = [];
    for (let i = 0; i < amount; i++) {
      newStack.push(stack[i]);
    }
    setStack(newStack);
  }, [stack]);
  const onAddPrices = useOnAddPrices(handleChange, name, stack);
  const onRemovePrices = useOnRemovePrices(handleChange, name, stack);
  const onAddCustomPrices = useOnAddCustomPrices(handleChange, name, stack);
  const onCustomPricesChange = useOnCustomPricesChange(handleChange, name, stack);
  return <FormItemContainer>
    <Label htmlFor={label}>{label}</Label>
    <InsideContainer>
      <RowLayout>
        <Space>
          <Breadcrum names={optionLevelString(stack, value)} onClick={onBreadcrumClick} />
        </Space>
        {options && options.isSub ? <>
          <Button type='button' icon={<PlusIcon />} onClick={handleAddOption}>Add Option</Button>
          {stack.length > 0 && <Button type='button' onClick={onAddPrices}>Add Prices</Button>}
        </>
          :
          <Button type='button' onClick={onRemovePrices}>Remove Prices</Button>}

      </RowLayout>
      {options && options.isSub ?
        <>
          {
            options.subOptions.map((subOpt, index) => {
              return <SubOptionForm key={index} index={index} value={subOpt.name} handleSubOptionNameChange={handleSubOptionNameChange}
                onSelect={onSelect} onRemove={onRemove} />;
            })
          }
        </>
        :
        <SubCategorySetting options={options} onAddCustomPrices={onAddCustomPrices} onCustomPricesChange={onCustomPricesChange} />
      }
    </InsideContainer>
  </FormItemContainer>;
};

export default OptionCreator;