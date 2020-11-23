import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import IconButton from 'shared-lib/button/IconButton';
import H1 from 'shared-lib/form-item/H1';
import H2 from 'shared-lib/form-item/H2';
import SearchIcon from 'shared-lib/icon/SearchIcon';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import GridLayout from 'shared-lib/layout/GridLayout';
import MarginCard from 'shared-lib/layout/MarginCard';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import Carousel from 'shared-lib/ui/Carousel';
import FeaturedProductCard from 'shared-lib/ui/FeaturedProductCard';
import useShowSearchProduct from '../useShowSearchProduct';
import ClientBrandCard from './ClientBrandCard';
import ClientCatCard from './ClientCatCard';

const IntroRoute = props => {
  const { cats, brands, config } = useGlobalState();
  const showSearchProduct = useShowSearchProduct();
  return <ContentContainer>
    <H1>Welcome to PneuShop</H1>
    <CardContainer>
      <IconButton icon={<SearchIcon />} onClick={showSearchProduct}>search product</IconButton>
    </CardContainer>
    <H2>Featured Products</H2>
    <CardContainer>
      <MarginCard>
        <SquareLayout ratio={4 / 3} desktopRatio={2}>
          <Carousel data={config && config.interface && config.interface.mainCarousel} Card={FeaturedProductCard} />
        </SquareLayout>
      </MarginCard>
    </CardContainer>
    <H2>Product Categories</H2>
    <CardContainer>
      <GridLayout>
        {cats.map(cat => {
          return <ClientCatCard key={cat.value} cat={cat} />;
        })}
      </GridLayout>
    </CardContainer>
    <H2>Brands</H2>
    <CardContainer>
      <GridLayout>
        {brands.map(brand => {
          return <ClientBrandCard key={brand} brand={brand} />;
        })}
      </GridLayout>
    </CardContainer>
  </ContentContainer>;
};

export default IntroRoute;