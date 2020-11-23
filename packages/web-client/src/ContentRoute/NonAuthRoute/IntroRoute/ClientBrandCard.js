import React from 'react';
import BrandCard from 'shared-lib/ui/BrandCard';
import ClientRoutes from '../../../constant/ClientRoutes';
import useGoto from '../../../hook/useGoto';

const ClientBrandCard = ({ brand }) => {
  const gotoBrands = useGoto(`${ClientRoutes.SEARCH}?query=&cat=&brand=${brand.value}`);
  return <BrandCard brand={brand} onClick={gotoBrands} />;
};

export default ClientBrandCard;