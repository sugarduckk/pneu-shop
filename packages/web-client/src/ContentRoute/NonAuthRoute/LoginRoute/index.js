import { EmailAuthProvider, GoogleAuthProvider } from 'firebase-wrapper';
import useFacebookLogin from 'firebase-wrapper/hook/useFacebookLogin';
import useGoogleLogin from 'firebase-wrapper/hook/useGoogleLogin';
import useLoginWithEmail from 'firebase-wrapper/hook/useLoginWithEmail';
import useRedirectResult from 'firebase-wrapper/hook/useRedirectResult';
import React from 'react';
import useHandleError from 'redux-wrapper/hook/useHandleError';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import H1 from 'shared-lib/form-item/H1';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import FacebookIcon from 'shared-lib/icon/FacebookIcon';
import GoogleIcon from 'shared-lib/icon/GoogleIcon';
import { ContentContainer } from 'shared-lib/layout';
import Divider from 'shared-lib/ui/Divider';
import useHandleRedirectError from '../../../hook/useHandleRedirectError';
import useHandleEmailLoginError from './useHandleEmailLoginError';

const LoginRoute = props => {
  const handleError = useHandleError();
  const handleEmailLoginError = useHandleEmailLoginError();
  const login = useLoginWithEmail(handleEmailLoginError);
  const googleLogin = useGoogleLogin(handleError);
  const facebookLogin = useFacebookLogin(handleError);
  const { form, onSubmit, disabled, setValues } = useForm({
    email: '',
    password: ''
  }, login);
  const onConfirm = React.useCallback(payload => {
    const { email, method } = payload;
    switch (method) {
      case GoogleAuthProvider.PROVIDER_ID: {
        return googleLogin({
          hint: email
        });
      }
      case EmailAuthProvider.PROVIDER_ID: {
        return setValues({
          email,
          password: ''
        });
      }
      default: {
        break;
      }
    }
  }, [googleLogin, setValues]);
  const handleRedirectError = useHandleRedirectError(onConfirm);
  useRedirectResult(handleRedirectError);
  return <ContentContainer>
    <H1>Login</H1>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('email')} label='Email' />
        <TextInput {...form('password')} label='Password' type='password' />
      </Fieldset>
      <Button disabled={disabled} loading={disabled}>Login by email</Button>
      <Divider disabled={disabled}>or</Divider>
      <Button disabled={disabled} type='button' icon={<GoogleIcon />} bg='white' color='grey' onClick={googleLogin}>Sign in with Google</Button>
      <Button disabled={disabled} type='button' icon={<FacebookIcon />} bg='#1778F2' onClick={facebookLogin}>Continue with Facebook</Button>
    </Form>
  </ContentContainer >;
};

export default LoginRoute;