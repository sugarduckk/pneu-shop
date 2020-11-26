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
import KeyValueTable from 'shared-lib/ui/KeyValueTable';
import useOnDeleteCat from './useOnDeleteCat';

const EditCatRoute = props => {
  const { catId } = useParams();
  const { cats } = useGlobalState();
  const cat = React.useMemo(() => {
    const index = cats.map(c => c.value).indexOf(catId);
    if (index < 0) {
      return null;
    }
    return cats[index];
  }, [cats, catId]);
  const onEditCatName = useOnEditCatName(cat);
  const onEditCatImages = useOnEditCatImages(cat);
  const onDeleteCat = useOnDeleteCat(catId);
  if (cat === null) {
    return <ContentContainer>
      <H1>{`${catId} not available`}</H1>
    </ContentContainer>;
  }
  return <ContentContainer>
    <H1>{cat.label}</H1>
    <CardContainer>
      <SimpleCard>
        <KeyValueTable data={[
          ['Amount', cat.amount]
        ]} />
      </SimpleCard>
    </CardContainer>
    <CardContainer>
      <Button onClick={onEditCatName}>Edit Name</Button>
    </CardContainer>
    <CardContainer>
      <Button onClick={onEditCatImages}>Change Images</Button>
    </CardContainer>
    <CardContainer>
      <Button bg='red' onClick={onDeleteCat}>Delete</Button>
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