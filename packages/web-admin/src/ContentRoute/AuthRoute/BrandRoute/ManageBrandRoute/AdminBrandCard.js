import React from 'react';
import BrandCard from 'shared-lib/ui/BrandCard';
import AdminRoutes from '../../../../constant/AdminRoutes';
import useGoto from '../../../../hook/useGoto';

const AdminBrandCard = ({ brand }) => {
  const gotoBrand = useGoto(`${AdminRoutes.BRAND}/${brand.value}`);
  return <BrandCard brand={brand} onClick={gotoBrand} />;
};

export default AdminBrandCard;