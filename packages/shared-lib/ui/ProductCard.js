import React from 'react';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';
import BottomAbsoluteLayout from 'shared-lib/layout/BottomAbsoluteLayout';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';
import ItemName from './ItemName';
import { TopRightLayout } from '../layout/AbsoluteLayout';
import MarginCard from '../layout/MarginCard';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import SimpleCard from '../layout/SimpleCard';


const ProductCard = ({ hit, onClick }) => {
  const { brands } = useGlobalState();
  const brand = React.useMemo(() => {
    if (hit) {
      return brands.find(c => c.value === hit.brand);
    }
  }, [brands, hit]);
  return <RoundedLayout onClick={onClick}>
    <SquareLayout>
      <ImagePlaceholder src={hit.images.length > 0 && hit.images[0].src} alt='thumbnail' />
      <TopRightLayout>
        {brand ?
          <MarginCard>
            <RoundedLayout>
              <SquareLayout width='4em'>
                <ImagePlaceholder src={brand.logo} />
              </SquareLayout>
            </RoundedLayout>
          </MarginCard>
          :
          <SimpleCard >{hit.brand}</SimpleCard>}
      </TopRightLayout>
      <BottomAbsoluteLayout>
        <ItemName>{hit.name}</ItemName>
        <div>{hit.id}</div>
      </BottomAbsoluteLayout>
    </SquareLayout>
  </RoundedLayout>;
};

export default ProductCard;
