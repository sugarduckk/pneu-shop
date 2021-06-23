const renameOption = (stack, obj, newName, index) => {
  if (stack.length > 0) {
    var e = stack.shift();
    renameOption(stack, obj.subOptions[e], newName, index);
  }
  else {
    obj.subOptions[index].name = newName;
  }
};

export default renameOption;