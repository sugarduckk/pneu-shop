import React from 'react';
import CatCard from 'shared-lib/ui/CatCard';
import ClientRoutes from '../../../constant/ClientRoutes';
import useGoto from '../../../hook/useGoto';

const ClientCatCard = ({ cat }) => {
  const gotoCats = useGoto(`${ClientRoutes.SEARCH}?query=&cat=${cat.value}&brand=&page=0`);
  return <CatCard cat={cat} onClick={gotoCats} />;
};

export default ClientCatCard;