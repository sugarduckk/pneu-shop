import React from 'react';
import useSignInMethod from 'firebase-wrapper/hook/useSignInMethod';
import { GoogleAuthProvider, EmailAuthProvider } from 'firebase-wrapper';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';

const useHandleRedirectError = (onConfirm) => {
  const signInMethod = useSignInMethod();
  const showConfirm = useShowConfirmDialog(onConfirm);
  return React.useCallback(error => {
    if (error.code === 'auth/account-exists-with-different-credential') {
      const getMessagePayload = new Promise((resolve, reject) => {
        signInMethod(error.email)
          .then(methods => {
            switch (methods[0]) {
              case EmailAuthProvider.PROVIDER_ID:
                resolve({
                  message: `The login method for this email ${error.email} is Email and Password. Do you want to login with Email and Password?`,
                  payload: {
                    email: error.email,
                    method: EmailAuthProvider.PROVIDER_ID
                  }
                });
                break;
              case GoogleAuthProvider.PROVIDER_ID:
                resolve({
                  message: `The login method for this email ${error.email} is Google. Do you want to login with Google?`,
                  payload: {
                    email: error.email,
                    method: GoogleAuthProvider.PROVIDER_ID
                  }
                });
                break;
              default:
                reject(new Error(`Invalid login method: ${methods[0]}`));
            }
          })
          .catch(reject);
      });
      showConfirm(getMessagePayload);
    }
  }, [showConfirm, signInMethod]);
};

export default useHandleRedirectError;