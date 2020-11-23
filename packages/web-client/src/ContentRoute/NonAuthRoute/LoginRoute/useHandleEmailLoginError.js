import React from 'react';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase-wrapper';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import useHandleError from 'redux-wrapper/hook/useHandleError';
import useGoogleLogin from 'firebase-wrapper/hook/useGoogleLogin';
import useFacebookLogin from 'firebase-wrapper/hook/useFacebookLogin';
import useSignInMethod from 'firebase-wrapper/hook/useSignInMethod';

const useHandleEmailLoginError = () => {
  const handleError = useHandleError();
  const googleLogin = useGoogleLogin(handleError);
  const facebookLogin = useFacebookLogin(handleError);
  const showConfirm = useShowConfirmDialog(payload => {
    const { email, method } = payload;
    if (method === GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD) {
      return googleLogin({
        hint: email
      });
    }
    else if (method === FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD) {
      return facebookLogin();
    }
  });
  const signInMethod = useSignInMethod();
  return React.useCallback((error, email) => {
    if (error.code === 'auth/wrong-password') {
      const getMessagePayload = new Promise((resolve, reject) => {
        signInMethod(email)
          .then(methods => {
            switch (methods[0]) {
              case FacebookAuthProvider.PROVIDER_ID:
                resolve({
                  message: `The login method for this email ${email} is Facebook. Do you want to login with Facebook?`,
                  payload: {
                    email,
                    method: FacebookAuthProvider.PROVIDER_ID
                  }
                });
                break;
              case GoogleAuthProvider.PROVIDER_ID:
                resolve({
                  message: `The login method for this email ${email} is Google. Do you want to login with Google?`,
                  payload: {
                    email,
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

export default useHandleEmailLoginError;