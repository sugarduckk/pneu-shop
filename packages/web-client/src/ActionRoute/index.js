import React from 'react';
import ResetPasswordPage from './ResetPasswordPage';
import VerifyEmailPage from './VerifyEmailPage';
import { Redirect } from 'react-router-dom';

const ActionRoute = props => {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode');
  const actionCode = params.get('oobCode');
  const continueUrl = params.get('continueUrl');
  var continueUrlObj, continueUrlParams, uid;
  if (continueUrl) {
    continueUrlObj = new URL(continueUrl);
    continueUrlParams = new URLSearchParams(continueUrlObj.search);
    uid = continueUrlParams.get('uid');
  }
  switch (mode) {
    case 'resetPassword':
      return <ResetPasswordPage actionCode={actionCode} />;
    case 'recoverEmail':
      return <div>Email recover page</div>;
    case 'verifyEmail':
      return <VerifyEmailPage uid={uid} actionCode={actionCode} />;
    default:
      return <Redirect to='/' />;
  }
};

export default ActionRoute;