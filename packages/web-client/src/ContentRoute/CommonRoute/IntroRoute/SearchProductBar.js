import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDismissDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import Dropdown from 'shared-lib/form-item/Dropdown';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import TextInput from 'shared-lib/form-item/TextInput';
import useExtendedOptions from 'shared-lib/hook/useExtendedOptions';
import useForm from 'shared-lib/hook/useForm';
import SearchIcon from 'shared-lib/icon/SearchIcon';
import AlignBottomLayout from 'shared-lib/layout/AlignBottomLayout';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import ClientRoutes from '../../../constant/ClientRoutes';
import useClientString from '../../../hook/useClientString';

const SearchProductBar = props => {
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
  return <SimpleCard>
    <Form row={true} onSubmit={onSubmit}>
      <Fieldset row={true} disabled={disabled}>
        <TextInput {...form('query')} label={S.KEYWORD} />
        <AlignBottomLayout>
          <Dropdown {...form('cat')} label={S.CATEGORY} options={extendedCats} />
          <Dropdown {...form('brand')} label={S.BRAND} options={extendedBrands} />
          <Button icon={<SearchIcon />}>{S.SEARCH}</Button>
        </AlignBottomLayout>
      </Fieldset>
    </Form>
  </SimpleCard>;
};

export default SearchProductBar;