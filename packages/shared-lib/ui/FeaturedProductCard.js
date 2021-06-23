import useProduct from 'firebase-wrapper/firestore/useProduct';
import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import TopAbsoluteLayout from 'shared-lib/layout/TopAbsoluteLayout';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';
import useBrand from '../hook/useBrand';
import useCat from '../hook/useCat';
import useCommonString from '../hook/useCommonString';
import { BottomRightLayout } from '../layout/AbsoluteLayout';
import IdContainer from '../layout/IdContainer';
import MarginCard from '../layout/MarginCard';
import RoundedLayout from '../layout/RoundedLayout';
import RowLayout from '../layout/RowLayout';
import SimpleCard from '../layout/SimpleCard';
import SquareLayout from '../layout/SquareLayout';
import CardLoading from '../screen/CardLoading';
import ItemName from './ItemName';


const FeaturedProductCard = ({ data }) => {
  const S = useCommonString();
  const product = useProduct(data.productId);
  const cat = useCat(product);
  const brand = useBrand(product);
  if (product === undefined) return <CardLoading />;
  if (product === null) return <div>{`[${data.productId} is not available]`}</div>;
  return <>
    <ImagePlaceholder src={product.images[0].src} alt='featured product' />
    <TopAbsoluteLayout>
      <ItemName>{product.name}</ItemName>
      <IdContainer>{`${S.ITEM_ID}: ${product.id}`}</IdContainer>
    </TopAbsoluteLayout>
    <BottomRightLayout>
      <RowLayout style={{ alignItems: 'flex-end' }}>
        <SimpleCard>
          {cat ? cat.label : product.category}
        </SimpleCard>
        {brand ?
          <MarginCard>
            <RoundedLayout>
              <SquareLayout width='4em'>
                <ImagePlaceholder src={brand.logo} alt='logo' />
              </SquareLayout>
            </RoundedLayout>
          </MarginCard>
          :
          <SimpleCard>{product.brand}</SimpleCard>}
      </RowLayout>
    </BottomRightLayout>
  </>;
};

export default FeaturedProductCard;