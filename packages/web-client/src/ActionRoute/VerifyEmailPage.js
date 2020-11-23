import React from 'react';
import applyActionCode from 'firebase-wrapper/auth/applyActionCode';
import useHttpsCallable from 'firebase-wrapper/function/useHttpsCallable';
import LoadingScreen from 'shared-lib/screen/LoadingScreen';

const VerifyEmailPage = ({ uid, actionCode, ...otherProps }) => {
  const [status, setStatus] = React.useState('');
  const [done, setDone] = React.useState(false);
  var updateEmailVerified = useHttpsCallable('updateEmailVerified');
  React.useEffect(() => {
    setStatus('Verifying email');
    applyActionCode(actionCode)
      .then(() => {
        setStatus('Notifying client');
        return updateEmailVerified({ uid });
      })
      .then(() => {
        setStatus('Email verified. You may close this window.');
      })
      .catch(error => {
        setStatus(error.code + ": " + error.message);
      })
      .finally(() => {
        setDone(true);
      });
  }, [actionCode, uid, updateEmailVerified]);
  return <LoadingScreen done={done} text={status} />;
};

export default VerifyEmailPage;