import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useEmailVerifiedEffect from 'firebase-wrapper/auth/useEmailVerifiedEffect';
import useVisibilityChange from 'shared-lib/hook/useVisibilityChange';
import Button from 'shared-lib/button/Button';
import Countdown from 'shared-lib/ui/Countdown';
import useSendVerificationEmail from './useSendVerificationEmail';
import CardContainer from 'shared-lib/layout/CardContainer';

const timeLimit = 3000;

const VerificationRoute = props => {
  const [timeElapsed, setTimeElapsed] = React.useState();
  const { user, userDoc } = useGlobalState();
  // Reload user on email verified
  useEmailVerifiedEffect();
  React.useEffect(() => {
    if (userDoc && userDoc.verifyEmailSent) {
      setTimeElapsed(Math.round((Date.now() - userDoc.verifyEmailSent.toDate()) / 1000));
    }
  }, [userDoc]);
  const onVisibilityChange = React.useCallback(() => {
    if (!document.hidden && userDoc && userDoc.verifyEmailSent) {
      setTimeElapsed(Math.round((Date.now() - userDoc.verifyEmailSent.toDate()) / 1000));
    }
  }, [userDoc]);
  useVisibilityChange(onVisibilityChange);
  const disabled = React.useMemo(() => {
    if (userDoc && !userDoc.verifyEmailSent) {
      return false;
    }
    return timeElapsed < timeLimit;
  }, [timeElapsed, userDoc]);
  const sendVerificationEmail = useSendVerificationEmail();
  return <ContentContainer>
    <H1>{user.email} is not verified.</H1>
    <CardContainer>
      <Button disabled={disabled} onClick={sendVerificationEmail}>
        {
          disabled ? <Countdown count={timeLimit - timeElapsed} callback={() => setTimeElapsed(timeLimit)} /> : <div>send verification email</div>
        }
      </Button>
    </CardContainer>
  </ContentContainer>;
};

export default VerificationRoute;