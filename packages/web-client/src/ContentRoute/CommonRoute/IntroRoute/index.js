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
import SquareLayout from 'shared-lib/layout/SquareLayout';
import Carousel from 'shared-lib/ui/Carousel';
import FeaturedProductCard from 'shared-lib/ui/FeaturedProductCard';
import ClientRoutes from '../../../constant/ClientRoutes';
import useShowSearchProduct from '../../NonAuthRoute/useShowSearchProduct';
import ClientBrandCard from './ClientBrandCard';
import ClientCatCard from './ClientCatCard';

const IntroRoute = props => {
  const history = useHistory();
  const theme = useTheme();
  const { cats, brands, config } = useGlobalState();
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
    {/* <H1>PNEUSHOP</H1> */}
    <CardContainer>
      <SimpleCard bg={theme.color.primary}>
        <MarginCard>
          <PneuShop fill={theme.color.contrast} />
        </MarginCard>
        <Para>One stop hub for pneumatic products</Para>
        <Button icon={<SearchIcon fill={theme.color.primary} />} onClick={showSearchProduct} bg={theme.color.background} color={theme.color.primary}>search product</Button>
      </SimpleCard>
    </CardContainer>
    <CardContainer>

    </CardContainer>
    <H2>Featured Products</H2>
    <CardContainer>
      <MarginCard>
        <SquareLayout ratio={4 / 3} desktopRatio={2}>
          <Carousel data={config && config.interface && config.interface.mainCarousel} Card={FeaturedProductCard} onClick={onCarouselClick} />
        </SquareLayout>
      </MarginCard>
    </CardContainer>
    <H2 ref={catsRef} id='category_header'>Product Categories</H2>
    <CardContainer>
      <GridLayout>
        {cats.map(cat => {
          return <ClientCatCard key={cat.value} cat={cat} />;
        })}
      </GridLayout>
    </CardContainer>
    <H2 ref={brandRef} id='brand_header'>Brands</H2>
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