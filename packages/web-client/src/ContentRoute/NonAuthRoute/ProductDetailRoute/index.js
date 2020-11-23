import React from 'react';
import useProduct from 'firebase-wrapper/firestore/useProduct';
import { useParams } from 'react-router-dom';
import ProductDetail from 'shared-lib/ui/ProductDetail';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import H1 from 'shared-lib/form-item/H1';

const ProductDetailRoute = props => {
  const { productId } = useParams();
  const product = useProduct(productId);
  if (!product) return <div>loading</div>;
  return <ContentContainer>
    <H1>{product.name}</H1>
    <CardContainer>
      <ProductDetail product={product} />
    </CardContainer>
  </ContentContainer>;
};

export default ProductDetailRoute;