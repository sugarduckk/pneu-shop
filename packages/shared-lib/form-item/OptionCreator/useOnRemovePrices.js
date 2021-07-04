import { useCallback } from "react";

const removePriceRecursive = (stack, obj) => {
  if (stack.length > 0) {
    var e = stack.shift();
    removePriceRecursive(stack, obj.subOptions[e]);
  }
  else {
    obj.isSub = true;
  }
};

const useOnRemovePrices = (handleChange, name, stack) => {
  return useCallback(() => {
    handleChange(name, oldValue => {
      const newValue = { ...oldValue };
      removePriceRecursive([...stack], newValue);
      return newValue;
    });
  }, [handleChange, name, stack]);
};

export default useOnRemovePrices;