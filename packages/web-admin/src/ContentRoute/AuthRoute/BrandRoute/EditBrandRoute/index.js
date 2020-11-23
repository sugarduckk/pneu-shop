import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import { useParams } from 'react-router-dom';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import CardContainer from 'shared-lib/layout/CardContainer';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import Button from 'shared-lib/button/Button';
import FullImage from 'shared-lib/layout/FullImage';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import useOnEditBrandName from './useOnEditBrandName';
import useOnEditBrandLogo from './useOnEditBrandLogo';

const EditBrandRoute = props => {
  const { brandId } = useParams();
  const { brands } = useGlobalState();
  const brand = React.useMemo(() => {
    const index = brands.map(b => b.value).indexOf(brandId);
    return brands[index];
  }, [brands, brandId]);
  const onEditBrandName = useOnEditBrandName(brand);
  const onEditBrandLogo = useOnEditBrandLogo(brand);
  return <ContentContainer>
    <H1>{brand.label}</H1>
    <CardContainer>
      <Button onClick={onEditBrandName}>Edit Name</Button>
    </CardContainer>
    <CardContainer>
      <Button onClick={onEditBrandLogo}>Change Logo</Button>
    </CardContainer>
    <CardContainer>
      <SimpleCard>
        <SquareLayout>
          <FullImage src={brand.logo} alt='brand logo' />
        </SquareLayout>
      </SimpleCard>
    </CardContainer>
  </ContentContainer>;
};

export default EditBrandRoute;