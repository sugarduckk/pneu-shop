import React from 'react';
import ProductCard from 'shared-lib/ui/ProductCard';
import AdminRoutes from '../../../../constant/AdminRoutes';
import useGoto from '../../../../hook/useGoto';

const AdminProductCard = ({ hit }) => {
  const gotoEditProduct = useGoto(`${AdminRoutes.PRODUCT}/${hit.id}`);
  return <ProductCard hit={hit} onClick={gotoEditProduct} />;
};

export default AdminProductCard;
