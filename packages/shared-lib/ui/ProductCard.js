import React from 'react';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';
import BottomAbsoluteLayout from 'shared-lib/layout/BottomAbsoluteLayout';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';

const ProductCard = ({ hit, onClick }) => {
  return <RoundedLayout onClick={onClick}>
    <SquareLayout>
      <ImagePlaceholder src={hit.images.length > 0 && hit.images[0].src} alt='thumbnail' />
      <BottomAbsoluteLayout>
        <div>{hit.name}</div>
        <div>{hit.id}</div>
      </BottomAbsoluteLayout>
    </SquareLayout>
  </RoundedLayout>;
};

export default ProductCard;
