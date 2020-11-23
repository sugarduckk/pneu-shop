import React from 'react';
import { auth, FacebookAuthProvider } from '..';

const useFacebookLogin = (handleError) => {
  return React.useCallback(() => {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      display: 'popup'
    });
    return auth.signInWithRedirect(provider).catch(handleError);
  }, [handleError]);
};

export default useFacebookLogin;
