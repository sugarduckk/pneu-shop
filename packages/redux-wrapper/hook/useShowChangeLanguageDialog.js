import React from 'react';
import Button from 'shared-lib/button/Button';
import OptionCardContainer from 'shared-lib/form-item/Selection/OptionCardContainer';
import RowLayout from 'shared-lib/layout/RowLayout';
import Space from 'shared-lib/layout/Space';
import { useDismissDialog, useSetState, useUpdateDialog } from '../action';
import useGlobalState from './useGlobalState';

const useSetLang = (newLang) => {
  const setState = useSetState();
  const dismiss = useDismissDialog();
  return React.useCallback(() => {
    setState({
      lang: newLang
    });
    localStorage.setItem('lang', newLang);
    dismiss();
  }, [newLang, setState, dismiss]);
};

const ChangeLanguageDialog = props => {
  const { lang } = useGlobalState();
  const dismiss = useDismissDialog();
  const setThai = useSetLang('th');
  const setEnglish = useSetLang('en');
  return <>
    <OptionCardContainer selected={lang === 'th'} onClick={setThai}>
      ภาษาไทย
      </OptionCardContainer>
    <OptionCardContainer selected={lang === 'en'} onClick={setEnglish}>
      English
    </OptionCardContainer>
    <RowLayout>
      <Space />
      <Button onClick={dismiss} bg='red'>dismiss</Button>
    </RowLayout>
  </>;
};

const useShowChangeLanguageDialog = () => {
  const updateDialog = useUpdateDialog();
  return React.useCallback(() => {
    updateDialog(<ChangeLanguageDialog />);
  }, [updateDialog]);
};

export default useShowChangeLanguageDialog;