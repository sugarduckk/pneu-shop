import useProduct from 'firebase-wrapper/firestore/useProduct';
import React from 'react';
import CartPreviewContainer from 'shared-lib/layout/CartPreviewContainer';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';

const ItemCard = ({ item }) => {
  const product = useProduct(item.productId);
  if (!product) return <DialogLoading />;
  return <div>
    <RoundedLayout>
      <SquareLayout width='8em'>
        <ImagePlaceholder src={product.images[0].src} />
      </SquareLayout>
    </RoundedLayout>
  </div>;
};

const CartPreview = ({ cart }) => {
  return <CartPreviewContainer>
    {cart.map(item => {
      return <ItemCard key={item.productId} item={item} />;
    })}
  </CartPreviewContainer>;
};

export default CartPreview;