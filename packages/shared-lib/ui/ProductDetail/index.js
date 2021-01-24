import React from 'react';
import useBrand from '../../hook/useBrand';
import useCat from '../../hook/useCat';
import useCommonString from '../../hook/useCommonString';
import CardContainer from '../../layout/CardContainer';
import GridLayout from '../../layout/GridLayout';
import RoundedLayout from '../../layout/RoundedLayout';
import SimpleCard from '../../layout/SimpleCard';
import SquareLayout from '../../layout/SquareLayout';
import ImagePlaceholder from '../ImagePlaceholder';
import LabelContainer from '../LabelContainer';
import TextContainer from '../TextContainer';
import ProductDetailContainer from './ProductDetailContainer';
import ProductPrices from './ProductPrices';

const ProductDetail = ({ product }) => {
  const S = useCommonString();
  const cat = useCat(product);
  const brand = useBrand(product);
  return <>
    <CardContainer>
      <SimpleCard>
        <ProductDetailContainer>
          <LabelContainer>{S.PRODUCT_NAME}</LabelContainer>
          <TextContainer>
            {product.name}
          </TextContainer>
          <LabelContainer>{S.PRODUCT_ID}</LabelContainer>
          <TextContainer>
            {product.id}
          </TextContainer>
          <LabelContainer>{S.PRODUCT_CATEGORY}</LabelContainer>
          <TextContainer>
            {cat ? cat.label : product.category}
          </TextContainer>
          <LabelContainer>{S.PRODUCT_BRAND}</LabelContainer>
          <TextContainer>
            {brand ? brand.label : product.brand}
          </TextContainer>
          <LabelContainer>{S.PRODUCT_IN_STOCK}</LabelContainer>
          <TextContainer>
            {product.in_stock > 0 ? product.in_stock : 0}
          </TextContainer>
          <LabelContainer>{S.PRODUCT_PRICES}</LabelContainer>
          <TextContainer>
            <ProductPrices key='prices' prices={product.prices} />
          </TextContainer>
          <LabelContainer>{S.PRODUCT_DETAILS}</LabelContainer>
          <TextContainer>
            {product.details}
          </TextContainer>
        </ProductDetailContainer>
      </SimpleCard>
    </CardContainer>
    <CardContainer>
      <GridLayout>
        {product.images.map((image, index) => {
          return <RoundedLayout key={index}>
            <SquareLayout>
              <ImagePlaceholder src={image.src} alt={image.name} />
            </SquareLayout>
          </RoundedLayout>;
        })}
      </GridLayout>
    </CardContainer>
  </>;
};

export default ProductDetail;