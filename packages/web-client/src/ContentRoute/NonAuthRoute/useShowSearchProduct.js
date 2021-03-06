import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAddDialog, useDismissDialog, useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import Dropdown from 'shared-lib/form-item/Dropdown';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import TextInput from 'shared-lib/form-item/TextInput';
import useExtendedOptions from 'shared-lib/hook/useExtendedOptions';
import useForm from 'shared-lib/hook/useForm';
import SearchIcon from 'shared-lib/icon/SearchIcon';
import CardContainer from 'shared-lib/layout/CardContainer';
import Space from 'shared-lib/layout/Space';
import ClientRoutes from '../../constant/ClientRoutes';
import useClientString from '../../hook/useClientString';

export const SearchProductDialog = props => {
  const S = useClientString();
  const history = useHistory();
  const { brands, cats } = useGlobalState();
  const dismissDialog = useDismissDialog();
  const extendedCats = useExtendedOptions(cats);
  const extendedBrands = useExtendedOptions(brands);
  const handleSubmit = React.useCallback(values => {
    const { query, cat, brand } = values;
    history.push(`${ClientRoutes.SEARCH}?query=${query}&cat=${cat}&brand=${brand}&page=0`);
    dismissDialog();
  }, [history, dismissDialog]);
  const { form, onSubmit, disabled } = useForm({
    query: '',
    cat: '',
    brand: ''
  }, handleSubmit);
  return <Form onSubmit={onSubmit}>
    <Fieldset disabled={disabled}>
      <TextInput {...form('query')} label={S.KEYWORD} />
      <Dropdown {...form('cat')} label={S.CATEGORY} options={extendedCats} />
      <Dropdown {...form('brand')} label={S.BRAND} options={extendedBrands} />
    </Fieldset>
    <CardContainer row={true}>
      <Space />
      <Button type='button' bg='red' onClick={dismissDialog}>
        {S.DISMISS}
      </Button>
      <Button type='submit' icon={<SearchIcon />} disabled={disabled} loading={disabled}>
        {S.SEARCH}
      </Button>
    </CardContainer>
  </Form>;
};

const useShowSearchProduct = (update = false) => {
  const addDialog = useAddDialog();
  const updateDialog = useUpdateDialog();
  return React.useCallback(() => {
    if (update) {
      updateDialog(<SearchProductDialog />);
    }
    else {
      addDialog(<SearchProductDialog />);
    }

  }, [updateDialog, addDialog, update]);
};

export default useShowSearchProduct;