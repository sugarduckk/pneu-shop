import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import IconButton from 'shared-lib/button/IconButton';
import Dropdown from 'shared-lib/form-item/Dropdown';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import H1 from 'shared-lib/form-item/H1';
import TextInput from 'shared-lib/form-item/TextInput';
import useExtendedOptions from 'shared-lib/hook/useExtendedOptions';
import useForm from 'shared-lib/hook/useForm';
import SearchIcon from 'shared-lib/icon/SearchIcon';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import AlgoliaPaginationScreen from 'shared-lib/screen/AlgoliaPaginationScreen';
import useSearchProduct from 'algolia-wrapper/hook/useSearchProduct';
import AdminProductCard from './AdminProductCard';

const SearchProductRoute = props => {
  const [result, setResult] = React.useState();
  const { cats, brands } = useGlobalState();
  const extendedCats = useExtendedOptions(cats);
  const extendedBrands = useExtendedOptions(brands);
  const searchProduct = useSearchProduct();
  const handleSubmit = React.useCallback(values => {
    const { query, cat, brand } = values;
    return searchProduct(query, cat, brand).then(setResult);
  }, [searchProduct]);
  const { form, onSubmit, disabled, values } = useForm({
    query: '',
    cat: extendedCats[0].value,
    brand: extendedBrands[0].value
  }, handleSubmit);
  const onNextClick = React.useCallback(e => {
    if (result) {
      const { query, cat, brand } = values;
      searchProduct(query, cat, brand, result.page + 1).then(setResult);
    }
  }, [searchProduct, values, result]);
  const onPreviousClick = React.useCallback(e => {
    if (result) {
      const { query, cat, brand } = values;
      searchProduct(query, cat, brand, result.page - 1).then(setResult);
    }
  }, [searchProduct, values, result]);
  return <ContentContainer>
    <H1>Search Product</H1>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('query')} label='keyword' />
        <CardContainer row={true}>
          <Dropdown {...form('cat')} label='category' options={extendedCats} />
          <Dropdown {...form('brand')} label='brand' options={extendedBrands} />
        </CardContainer>
      </Fieldset>
      <IconButton icon={<SearchIcon />} disabled={disabled} loading={disabled}>search</IconButton>
    </Form>
    {result && <AlgoliaPaginationScreen Card={AdminProductCard} result={result} onNextClick={onNextClick} onPreviousClick={onPreviousClick} />}
  </ContentContainer>;
};

export default SearchProductRoute;