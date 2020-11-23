const subtractArray = (list1, list2, key, isUnion = false) => {
  return list1.filter(
    (set => a => isUnion === set.has(a[key]))(new Set(list2.map(b => b[key])))
  );
};

export default subtractArray;