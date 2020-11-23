import React from 'react';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';
import BottomAbsoluteLayout from 'shared-lib/layout/BottomAbsoluteLayout';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';

const BrandCard = ({ brand, onClick }) => {
  const { label, logo } = brand;
  return <RoundedLayout onClick={onClick}>
    <SquareLayout>
      <ImagePlaceholder src={logo} alt='thumbnail' />
      <BottomAbsoluteLayout>
        <div>{label}</div>
      </BottomAbsoluteLayout>
    </SquareLayout>
  </RoundedLayout>;
};

export default BrandCard;