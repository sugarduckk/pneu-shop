import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import H1 from 'shared-lib/form-item/H1';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import GridLayout from 'shared-lib/layout/GridLayout';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';

const AboutUsRoute = props => {
  const { config } = useGlobalState();
  return <ContentContainer>
    <H1>About Us</H1>
    <CardContainer>
      <SimpleCard>
        {config.aboutUs.info}
      </SimpleCard>
    </CardContainer>
    <CardContainer>
      <GridLayout>
        {config.aboutUs.images.map(image => {
          return <RoundedLayout key={image.name}>
            <SquareLayout>
              <ImagePlaceholder src={image.src} />
            </SquareLayout>
          </RoundedLayout>;
        })}
      </GridLayout>
    </CardContainer>
  </ContentContainer>;
};

export default AboutUsRoute;