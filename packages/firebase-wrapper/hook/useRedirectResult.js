import React from 'react';
import { auth } from '..';

const useRedirectResult = (handleError) => {
  React.useEffect(() => {
    auth.getRedirectResult()
      .catch(handleError);
  }, [handleError]);
};

export default useRedirectResult;