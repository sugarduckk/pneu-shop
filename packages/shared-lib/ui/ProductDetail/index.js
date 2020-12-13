import React from 'react';
import CardContainer from '../../layout/CardContainer';
import GridLayout from '../../layout/GridLayout';
import RoundedLayout from '../../layout/RoundedLayout';
import SimpleCard from '../../layout/SimpleCard';
import SquareLayout from '../../layout/SquareLayout';
import ImagePlaceholder from '../ImagePlaceholder';
import KeyValueTable from '../KeyValueTable';
import ProductPrices from './ProductPrices';

const ProductDetail = ({ product }) => {
  const productArray = React.useMemo(() => {
    return [
      ['Name', product.name],
      ['Product ID', product.id],
      ['Category', product.category],
      ['Brand', product.brand],
      ['In stock', product.in_stock],
      ['Details', product.details],
      ['Prices', <ProductPrices key='prices' prices={product.prices} />]
    ];
  }, [product]);
  return <>
    <CardContainer>
      <SimpleCard>
        <KeyValueTable data={productArray} />
      </SimpleCard>
    </CardContainer>
    <CardContainer>
      <GridLayout>
        {product.images.map((image, index) => {
          return <RoundedLayout key={index}>
            <SquareLayout>
              <ImagePlaceholder src={image.src} alt={image.name} />
            </SquareLayout>
          </RoundedLayout>;
        })}
      </GridLayout>
    </CardContainer>
  </>;
};

export default ProductDetail;