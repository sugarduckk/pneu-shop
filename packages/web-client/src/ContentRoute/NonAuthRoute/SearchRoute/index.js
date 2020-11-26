import useSearchProduct from 'algolia-wrapper/hook/useSearchProduct';
import qs from 'query-string';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import H1 from 'shared-lib/form-item/H1';
import useExtendedOptions from 'shared-lib/hook/useExtendedOptions';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import AlgoliaPaginationScreen from 'shared-lib/screen/AlgoliaPaginationScreen';
import KeyValueTable from 'shared-lib/ui/KeyValueTable';
import ClientRoutes from '../../../constant/ClientRoutes';
import useGoto from '../../../hook/useGoto';
import ClientProductCard from './ClientProductCard';

const SearchRoute = props => {
  const [result, setResult] = React.useState();
  const { cats, brands } = useGlobalState();
  const location = useLocation();
  const { query, cat, brand, page } = qs.parse(location.search);
  const extendedCats = useExtendedOptions(cats);
  const extendedBrands = useExtendedOptions(brands);
  const searchProduct = useSearchProduct();
  const goNext = useGoto(`${ClientRoutes.SEARCH}?query=${query || ''}&cat=${cat || ''}&brand=${brand || ''}&page=${parseInt(page || 0) + 1}`);
  const goPrevious = useGoto(`${ClientRoutes.SEARCH}?query=${query || ''}&cat=${cat || ''}&brand=${brand || ''}&page=${parseInt(page || 0) - 1}`);
  React.useEffect(() => {
    searchProduct(query || '', cat || '', brand || '', parseInt(page || 0)).then(setResult);
  }, [brand, cat, query, searchProduct, page]);
  return <ContentContainer>
    <H1>Search Results</H1>
    <CardContainer>
      <SimpleCard>
        <KeyValueTable data={[
          ['keyword', query],
          ['category', extendedCats.find(c => c.value === cat).label],
          ['brand', extendedBrands.find(b => b.value === brand).label]
        ]} />
      </SimpleCard>
    </CardContainer>
    <CardContainer>
      {result && <AlgoliaPaginationScreen Card={ClientProductCard} result={result} onNextClick={goNext} onPreviousClick={goPrevious} />}
    </CardContainer>
  </ContentContainer>;
};

export default SearchRoute;