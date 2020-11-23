import React from 'react';

const useExtendedOptions = (options) => {
  return React.useMemo(() => {
    return [{
      value: '',
      label: 'all'
    }, ...options];
  }, [options]);
};

export default useExtendedOptions;