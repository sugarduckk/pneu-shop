import { useCallback } from "react";
import PriceCard from "../../../ui/ProductForm/PriceCard";
import PriceForm from "../../../ui/ProductForm/PriceForm";
import Checkbox from "../../Checkbox";
import FormArray from "../../FormArray";


const SubCategorySetting = ({ options, onAddCustomPrices, onCustomPricesChange }) => {
  const onChange = useCallback((name, newChecked) => {
    onAddCustomPrices(newChecked);
  }, [onAddCustomPrices]);
  const onPricesChange = useCallback((name, getPrices) => {
    onCustomPricesChange(getPrices);
  }, [onCustomPricesChange]);
  return <>
    <Checkbox value={options.customPrices} handleChange={onChange} label={options.customPrices ? 'Uncheck to use default prices' : 'Check to add custom prices'} />
    {options.customPrices && <FormArray value={options.prices} handleChange={onPricesChange} label='Prices' SubForm={PriceForm} PreviewCard={PriceCard} />}
  </>;
};

export default SubCategorySetting;