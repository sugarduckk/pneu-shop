import useProduct from 'firebase-wrapper/firestore/useProduct';
import React from 'react';
import TopAbsoluteLayout from 'shared-lib/layout/TopAbsoluteLayout';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';

const FeaturedProductCard = ({ data }) => {
  const product = useProduct(data.productId);
  if (product === undefined) return <DialogLoading />;
  if (product === null) return <div>{`[${data.productId} is not available]`}</div>;
  return <>
    <ImagePlaceholder src={product.images[0].src} />
    <TopAbsoluteLayout>
      <div>{product.name}</div>
      <div>{product.id}</div>
    </TopAbsoluteLayout>
  </>;
};

export default FeaturedProductCard;