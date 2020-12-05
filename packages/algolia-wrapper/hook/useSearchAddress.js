import React from 'react';
import { addressesIndex } from '..';

const useSearchAddress = () => {
  return React.useCallback(post_code => {
    return addressesIndex.search(post_code, {
      typoTolerance: false
    });
  }, []);
};

export default useSearchAddress;