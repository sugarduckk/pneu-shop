import { useCallback } from "react";

const checkCustomPricesRecursive = (stack, obj, checked) => {
  if (stack.length > 0) {
    var e = stack.shift();
    checkCustomPricesRecursive(stack, obj.subOptions[e], checked);
  }
  else {
    obj.customPrices = checked;
  }
};

const useOnAddCustomPrices = (handleChange, name, stack) => {
  return useCallback((checked) => {
    handleChange(name, oldValue => {
      const newValue = { ...oldValue };
      checkCustomPricesRecursive([...stack], newValue, checked);
      return newValue;
    });
  }, [handleChange, name, stack]);
};

export default useOnAddCustomPrices;