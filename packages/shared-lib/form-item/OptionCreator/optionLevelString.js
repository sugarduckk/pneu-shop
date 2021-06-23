const optionLevelString = (stack, obj) => {
  const result = [];
  var currentLevel = obj;
  stack.forEach(value => {
    if (currentLevel.isSub) {
      currentLevel = currentLevel.subOptions[value];
    }
    result.push(currentLevel.name);
  });
  return result;
};

export default optionLevelString;