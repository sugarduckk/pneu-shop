import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useSetEmailVerificationTimestamp from 'firebase-wrapper/firestore/useSetEmailVerificationTimestamp';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';

const useSendVerificationEmail = () => {
  const { user } = useGlobalState();
  const setEmailVerificationTimestamp = useSetEmailVerificationTimestamp(user.uid);
  const showMessageDialog = useShowMessageDialog();
  return React.useCallback(() => {
    var actionCodeSettings = {
      url: `${process.env.ACTION_HANDLER_DOMAIN}?uid=${user.uid}`
    };
    const getMessage = new Promise((resolve, reject) => {
      user.sendEmailVerification(actionCodeSettings)
        .then(setEmailVerificationTimestamp)
        .then(() => {
          resolve('Verification email sent. Please check your inbox.');
        })
        .catch(reject);
    });
    showMessageDialog(getMessage);

  }, [showMessageDialog, setEmailVerificationTimestamp, user]);
};

export default useSendVerificationEmail;