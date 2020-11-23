import React from 'react';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';
import BottomAbsoluteLayout from 'shared-lib/layout/BottomAbsoluteLayout';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';
import useGoto from '../../../../hook/useGoto';
import AdminRoutes from '../../../../constant/AdminRoutes';
import CatCard from 'shared-lib/ui/CatCard';

const AdminCatCard = ({ cat }) => {
  const gotoCat = useGoto(`${AdminRoutes.CAT}/${cat.value}`);
  return <CatCard cat={cat} onClick={gotoCat} />;
};

export default AdminCatCard;