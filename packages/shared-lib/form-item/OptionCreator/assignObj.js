const assignObj = (stack, obj, value) => {
  if (stack.length > 0) {
    var e = stack.shift();
    assignObj(stack, obj.subOptions[e], value);
  }
  else {
    obj.subOptions.push(value);
  }
};

export default assignObj;