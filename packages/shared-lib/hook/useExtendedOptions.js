import React from 'react';
import useCommonString from './useCommonString';

const useExtendedOptions = (options) => {
  const S = useCommonString();
  return React.useMemo(() => {
    return [{
      value: '',
      label: S.ALL
    }, ...options];
  }, [options, S.ALL]);
};

export default useExtendedOptions;