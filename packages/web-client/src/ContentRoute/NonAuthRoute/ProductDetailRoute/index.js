import React from 'react';
import useProduct from 'firebase-wrapper/firestore/useProduct';
import { useParams } from 'react-router-dom';
import ProductDetail from 'shared-lib/ui/ProductDetail';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import H1 from 'shared-lib/form-item/H1';
import LoadingContent from '../../AuthRoute/LoadingContent';
import Button from 'shared-lib/button/Button';
import useAddToCart from '../../../hook/useAddToCart';
import CartIcon from 'shared-lib/icon/CartIcon';

const ProductDetailRoute = props => {
  const { productId } = useParams();
  const product = useProduct(productId);
  const addToCart = useAddToCart(productId);
  if (!product) return <LoadingContent />;
  return <ContentContainer>
    <H1>{product.name}</H1>
    <CardContainer>
      <Button icon={<CartIcon />} onClick={addToCart}>Add to Cart</Button>
    </CardContainer>
    <CardContainer>
      <ProductDetail product={product} />
    </CardContainer>
    <CardContainer>
      <Button icon={<CartIcon />} onClick={addToCart}>Add to Cart</Button>
    </CardContainer>
  </ContentContainer>;
};

export default ProductDetailRoute;