import useSetAboutUs from 'firebase-wrapper/firestore/useSetAboutUs';
import useSetContact from 'firebase-wrapper/firestore/useSetContact';
import React from 'react';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import Button from 'shared-lib/button/Button';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import ImageSelector from 'shared-lib/form-item/ImageSelector';
import Legend from 'shared-lib/form-item/Legend';
import TextArea from 'shared-lib/form-item/TextArea';
import useForm from 'shared-lib/hook/useForm';
import CardContainer from 'shared-lib/layout/CardContainer';
import Space from 'shared-lib/layout/Space';
import errorToMessage from 'shared-lib/util/errorToMessage';

const EditAboutUs = props => {
  const { config } = useGlobalState();
  const dismissDialog = useDismissDialog();
  const updateDialog = useUpdateDialog();
  const setAboutUs = useSetAboutUs();
  const handleSubmit = React.useCallback(values => {
    return setAboutUs(values, config && config.aboutUs)
      .then(() => {
        updateDialog(<MessageDialog message='About Us is updated.' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [setAboutUs, updateDialog, config]);
  const { form, onSubmit, disabled } = useForm({
    info: (config && config.aboutUs && config.aboutUs.info) || '',
    images: (config && config.aboutUs && config.aboutUs.images) || []
  }, handleSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <Legend>Edit About Us</Legend>
      <TextArea {...form('info')} label='Company Info' rows={5} />
      <ImageSelector {...form('images')} label='Company Images' multiple={true} />
    </Fieldset>
    <CardContainer row={true}>
      <Space />
      <Button type='button' bg='red' disabled={disabled} onClick={dismissDialog}>dismiss</Button>
      <Button type='submit' disabled={disabled} loading={disabled}>confirm</Button>
    </CardContainer>
  </Form>;
};

const useEditAboutUs = () => {
  const addDialog = useAddDialog();
  return React.useCallback(() => {
    addDialog(<EditAboutUs />);
  }, [addDialog]);
};

export default useEditAboutUs;