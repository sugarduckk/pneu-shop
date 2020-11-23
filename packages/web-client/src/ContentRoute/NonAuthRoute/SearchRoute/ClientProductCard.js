import React from 'react';
import ProductCard from 'shared-lib/ui/ProductCard';
import ClientRoutes from '../../../constant/ClientRoutes';
import useGoto from '../../../hook/useGoto';

const ClientProductCard = ({ hit }) => {
  const gotoProductDetail = useGoto(`${ClientRoutes.PRODUCT}/${hit.id}`);
  return <ProductCard hit={hit} onClick={gotoProductDetail} />;
};

export default ClientProductCard;