import { useCallback } from "react";

const addPriceRecursive = (stack, obj) => {
  if (stack.length > 0) {
    var e = stack.shift();
    addPriceRecursive(stack, obj.subOptions[e]);
  }
  else {
    obj.isSub = false;
  }
};

const useOnAddPrices = (handleChange, name, stack) => {
  return useCallback(() => {
    handleChange(name, oldValue => {
      const newValue = { ...oldValue };
      addPriceRecursive([...stack], newValue);
      return newValue;
    });
  }, [handleChange, name, stack]);
};

export default useOnAddPrices;