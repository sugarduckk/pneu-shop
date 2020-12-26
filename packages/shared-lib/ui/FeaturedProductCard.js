import useProduct from 'firebase-wrapper/firestore/useProduct';
import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import TopAbsoluteLayout from 'shared-lib/layout/TopAbsoluteLayout';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';
import { BottomRightLayout } from '../layout/AbsoluteLayout';
import SimpleCard from '../layout/SimpleCard';
import CardLoading from '../screen/CardLoading';

const FeaturedProductCard = ({ data }) => {
  const { cats, brands } = useGlobalState();
  const product = useProduct(data.productId);
  const cat = React.useMemo(() => {
    if (product) {
      return cats.find(c => c.value === product.category);
    }
  }, [cats, product]);
  const brand = React.useMemo(() => {
    if (product) {
      return brands.find(c => c.value === product.brand);
    }
  }, [brands, product]);
  if (product === undefined) return <CardLoading />;
  if (product === null) return <div>{`[${data.productId} is not available]`}</div>;
  return <>
    <ImagePlaceholder src={product.images[0].src} />
    <TopAbsoluteLayout>
      <div>{product.name}</div>
      <div>{product.id}</div>
    </TopAbsoluteLayout>
    <BottomRightLayout>
      <SimpleCard>
        {cat ? cat.label : product.category}
      </SimpleCard>
      <SimpleCard>
        {brand ? brand.label : product.brand}
      </SimpleCard>
    </BottomRightLayout>
  </>;
};

export default FeaturedProductCard;