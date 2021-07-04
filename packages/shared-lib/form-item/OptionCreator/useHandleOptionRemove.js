import { useCallback } from "react";
import removeOption from "./removeOption";

const useHandleOptionRemove = (stack, handleChange, name) => useCallback((index) => {
  handleChange(name, oldValue => {
    const newValue = { ...oldValue };
    removeOption([...stack], newValue, index);
    return newValue;
  });
}, [stack, handleChange, name]);

export default useHandleOptionRemove;