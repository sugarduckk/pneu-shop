import qs from 'query-string';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import { useTheme } from 'shared-lib/core';
import H2 from 'shared-lib/form-item/H2';
import Para from 'shared-lib/form-item/Para';
import PneuShop from 'shared-lib/icon/PneuShop';
import SearchIcon from 'shared-lib/icon/SearchIcon';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import GridLayout from 'shared-lib/layout/GridLayout';
import MarginCard from 'shared-lib/layout/MarginCard';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Carousel from 'shared-lib/ui/Carousel';
import FeaturedProductCard from 'shared-lib/ui/FeaturedProductCard';
import ClientRoutes from '../../../constant/ClientRoutes';
import useClientString from '../../../hook/useClientString';
import useShowSearchProduct from '../../NonAuthRoute/useShowSearchProduct';
import ClientBrandCard from './ClientBrandCard';
import ClientCatCard from './ClientCatCard';
import SearchProductBar from './SearchProductBar';

const IntroRoute = props => {
  const S = useClientString();
  const history = useHistory();
  const theme = useTheme();
  const { cats, brands, config, screenSize } = useGlobalState();
  const showSearchProduct = useShowSearchProduct();
  const location = useLocation();
  const { sect } = qs.parse(location.search);
  const catsRef = React.useRef();
  const brandRef = React.useRef();
  React.useEffect(() => {
    if (sect === 'cats') {
      let topOfElement = catsRef.current.offsetTop - theme.dim.nav.height;
      window.scroll({ top: topOfElement, behavior: "smooth" });
    }
    else if (sect === 'brands') {
      let topOfElement = brandRef.current.offsetTop - theme.dim.nav.height;
      window.scroll({ top: topOfElement, behavior: "smooth" });
    }
  }, [sect, theme.dim.nav.height]);
  const onCarouselClick = React.useCallback(data => {
    history.push(`${ClientRoutes.PRODUCT}/${data.productId}`);
  }, [history]);
  return <ContentContainer>
    <CardContainer>
      <SimpleCard bg={theme.color.primary}>
        <MarginCard>
          <PneuShop fill={theme.color.contrast} />
        </MarginCard>
        <Para>{S.SLOGAN}</Para>
        {screenSize === 'S' ?
          <Button icon={<SearchIcon fill={theme.color.primary} />} onClick={showSearchProduct} bg={theme.color.background} color={theme.color.primary}>
            {S.SEARCH_PRODUCT}
          </Button>
          :
          <SearchProductBar />
        }
      </SimpleCard>
    </CardContainer>
    <CardContainer>

    </CardContainer>
    <H2>{S.FEATURED_PRODUCT}</H2>
    <MarginCard>
      <Carousel ratio={4 / 3} desktopRatio={2} data={config && config.interface && config.interface.mainCarousel} Card={FeaturedProductCard} onClick={onCarouselClick} />
    </MarginCard>
    <H2 ref={catsRef} id='category_header'>{S.CATEGORIES}</H2>
    <CardContainer>
      <GridLayout>
        {cats.map(cat => {
          return <ClientCatCard key={cat.value} cat={cat} />;
        })}
      </GridLayout>
    </CardContainer>
    <H2 ref={brandRef} id='brand_header'>{S.BRANDS}</H2>
    <CardContainer>
      <GridLayout>
        {brands.map(brand => {
          return <ClientBrandCard key={brand.value} brand={brand} />;
        })}
      </GridLayout>
    </CardContainer>
  </ContentContainer>;
};

export default IntroRoute;