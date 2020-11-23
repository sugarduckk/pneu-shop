import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import H1 from 'shared-lib/form-item/H1';
import H2 from 'shared-lib/form-item/H2';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import MarginCard from 'shared-lib/layout/MarginCard';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import Carousel from 'shared-lib/ui/Carousel';
import FeaturedProductCard from 'shared-lib/ui/FeaturedProductCard';
import useEditMainCarousel from './useEditMainCarousel';

const InterfaceRoute = props => {
  const { config } = useGlobalState();
  const editMainCarousel = useEditMainCarousel();
  return <ContentContainer>
    <H1>Interface</H1>
    <H2>Edit Featured Products</H2>
    <CardContainer>
      <Button onClick={editMainCarousel}>Edit main carousel</Button>
    </CardContainer>
    <H2>Featured Products</H2>
    <CardContainer>
      <MarginCard>
        <SquareLayout ratio={4 / 3} desktopRatio={2}>
          <Carousel data={config && config.interface && config.interface.mainCarousel} Card={FeaturedProductCard} />
        </SquareLayout>
      </MarginCard>
    </CardContainer>
  </ContentContainer>;
};

export default InterfaceRoute;