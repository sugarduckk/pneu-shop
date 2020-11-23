import React from 'react';
import { GoogleAuthProvider, auth } from '..';

const useGoogleLogin = (handleError) => {
  return React.useCallback((payload) => {
    const provider = new GoogleAuthProvider();
    if (payload.hint) {
      provider.setCustomParameters({
        login_hint: payload.hint
      });
    }
    else {
      provider.setCustomParameters({
        prompt: 'select_account'
      });
    }
    return auth.signInWithRedirect(provider).catch(handleError);
  }, [handleError]);
};

export default useGoogleLogin;
