import React from 'react';
import { auth } from '..';

const useAuthEffect = (handleUser) => {
  React.useEffect(() => {
    console.log("useAuthEffect");
    return auth.onAuthStateChanged(handleUser);
  }, [handleUser]);
};

export default useAuthEffect;