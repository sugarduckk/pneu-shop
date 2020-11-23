import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import H1 from 'shared-lib/form-item/H1';
import { useParams } from 'react-router-dom';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import CardContainer from 'shared-lib/layout/CardContainer';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import Button from 'shared-lib/button/Button';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import useOnEditCatName from './useOnEditCatName';
import useOnEditBrandLogo from './useOnEditCatImages';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';
import GridLayout from 'shared-lib/layout/GridLayout';
import useOnEditCatImages from './useOnEditCatImages';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';

const EditCatRoute = props => {
  const { catId } = useParams();
  const { cats } = useGlobalState();
  const cat = React.useMemo(() => {
    const index = cats.map(c => c.value).indexOf(catId);
    return cats[index];
  }, [cats, catId]);
  const onEditCatName = useOnEditCatName(cat);
  const onEditCatImages = useOnEditCatImages(cat);
  return <ContentContainer>
    <H1>{cat.label}</H1>
    <CardContainer>
      <Button onClick={onEditCatName}>Edit Name</Button>
    </CardContainer>
    <CardContainer>
      <Button onClick={onEditCatImages}>Change Images</Button>
    </CardContainer>
    <CardContainer>
      {cat.images && <GridLayout>
        {cat.images.map((image, index) => {
          return <RoundedLayout key={index}>
            <SquareLayout>
              <ImagePlaceholder src={image.src} alt='category images' />
            </SquareLayout>
          </RoundedLayout>;
        })}
      </GridLayout>}
    </CardContainer>
  </ContentContainer>;
};

export default EditCatRoute;