import React from 'react';
import H1 from 'shared-lib/form-item/H1';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import TextInput from 'shared-lib/form-item/TextInput';
import Button from 'shared-lib/button/Button';
import useForm from 'shared-lib/hook/useForm';
import useRegister from 'firebase-wrapper/hook/useRegister';
import useHandleError from 'redux-wrapper/hook/useHandleError';
import { ContentContainer } from 'shared-lib/layout';

const RegisterRoute = props => {
  const handleError = useHandleError();
  const register = useRegister(handleError);
  const { form, onSubmit, disabled } = useForm({
    email: '',
    password: '',
    confirmPassword: ''
  }, register);
  return <ContentContainer>
    <H1>Register a new account</H1>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('email')} label='email' />
        <TextInput {...form('password')} label='password' type='password' />
        <TextInput {...form('confirmPassword')} label='confirm password' type='password' />
      </Fieldset>
      <Button disabled={disabled} loading={disabled}>Register</Button>
    </Form>
  </ContentContainer>;
};

export default RegisterRoute;