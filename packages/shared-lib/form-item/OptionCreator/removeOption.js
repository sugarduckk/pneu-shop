const removeOption = (stack, obj, index) => {
  if (stack.length > 0) {
    var e = stack.shift();
    removeOption(stack, obj.subOptions[e], index);
  }
  else {
    obj.subOptions.splice(index, 1);
  }
};

export default removeOption;