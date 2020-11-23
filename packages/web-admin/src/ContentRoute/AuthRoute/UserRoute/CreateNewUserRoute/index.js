import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import Form from 'shared-lib/form-item/Form';
import TextInput from 'shared-lib/form-item/TextInput';
import Button from 'shared-lib/button/Button';
import Dropdown from 'shared-lib/form-item/Dropdown';
import Roles from '../../../../constant/Roles';
import useForm from 'shared-lib/hook/useForm';
import Fieldset from 'shared-lib/form-item/Fieldset';
import useHttpsCallable from 'firebase-wrapper/function/useHttpsCallable';
import { useHistory } from 'react-router-dom';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';

const CreateNewUserRoute = props => {
  const history = useHistory();
  const showMessage = useShowMessageDialog();
  const createUserWithRole = useHttpsCallable('createUserWithRole');
  const sendRequest = React.useCallback(values => {
    const create = new Promise((resolve, reject) => {
      createUserWithRole(values)
        .then(() => {
          history.push('/manage_user');
          resolve('New user created');
        })
        .catch(reject);
    });
    showMessage(create, 'Creating new user');
  }, [createUserWithRole, history, showMessage]);
  const { form, onSubmit, disabled } = useForm({
    email: '',
    password: '',
    role: 'ADMIN'
  }, sendRequest);
  return <ContentContainer>
    <H1>Create New User</H1>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('email')} label='Email' />
        <TextInput {...form('password')} label='Password' />
        <Dropdown {...form('role')} label='Role' options={Roles} />
      </Fieldset>
      <Button disabled={disabled} loading={disabled}>create</Button>
    </Form>
  </ContentContainer>;
};

export default CreateNewUserRoute;