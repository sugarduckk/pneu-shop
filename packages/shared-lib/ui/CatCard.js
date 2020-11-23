import React from 'react';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';
import BottomAbsoluteLayout from 'shared-lib/layout/BottomAbsoluteLayout';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';

const CatCard = ({ cat, onClick }) => {
  const { label, images } = cat;
  return <RoundedLayout onClick={onClick}>
    <SquareLayout>
      <ImagePlaceholder src={images.length > 0 && images[0].src} alt='thumbnail' />
      <BottomAbsoluteLayout>
        <div>{label}</div>
      </BottomAbsoluteLayout>
    </SquareLayout>
  </RoundedLayout>;
};

export default CatCard;