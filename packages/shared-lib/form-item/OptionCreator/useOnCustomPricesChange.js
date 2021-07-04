import { useCallback } from "react";

const changeCustomPricesRecursive = (stack, obj, getPrices) => {
  if (stack.length > 0) {
    var e = stack.shift();
    changeCustomPricesRecursive(stack, obj.subOptions[e], getPrices);
  }
  else {
    obj.prices = getPrices(obj.prices);
  }
};

const useOnCustomPricesChange = (handleChange, name, stack) => {
  return useCallback((getPrices) => {
    handleChange(name, oldValue => {
      const newValue = { ...oldValue };
      changeCustomPricesRecursive([...stack], newValue, getPrices);
      return newValue;
    });
  }, [handleChange, name, stack]);
};

export default useOnCustomPricesChange;