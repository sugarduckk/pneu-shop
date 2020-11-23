import React from 'react';
import SquareLayout from '../../../layout/SquareLayout';
import CenterDiv from '../../../layout/CenterDiv';
import LeftButtonContainer from './LeftButtonContainer';
import RightButtonContainer from './RightButtonContainer';
import LeftIcon from '../../../icon/LeftIcon';
import RightIcon from '../../../icon/RightIcon';
import CenterButtonContainer from './CenterButtonContainer';
import LeftTopContainer from './LeftTopContainer';
import GridLayout from '../../../layout/GridLayout';
import TopRightContainer from './TopRightContainer';
import CloseIcon from '../../../icon/CloseIcon';
import RoundedLayout from '../../../layout/RoundedLayout';
import ImagePlaceholder from '../../../ui/ImagePlaceholder';

const ImagePreviewScreen = ({ files, onLeftClick, onRightClick, onDefaultClick, onCloseClick }) => {
  if (files.length === 0) return <CenterDiv>No Image</CenterDiv>;
  return <GridLayout>
    {files.map((file, index) => {
      return <SquareLayout key={file.name}>
        <RoundedLayout>
          <SquareLayout>
            <ImagePlaceholder src={file.src} alt='uploaded' />
          </SquareLayout>
        </RoundedLayout>
        <LeftTopContainer>
          {index + 1}
        </LeftTopContainer>
        <TopRightContainer onClick={e => { onCloseClick(index); }}>
          <CloseIcon fill='grey' />
        </TopRightContainer>
        <LeftButtonContainer disabled={index === 0} onClick={e => { onLeftClick(index); }}>
          <LeftIcon fill='grey' />
        </LeftButtonContainer>
        <CenterButtonContainer disabled={index === 0} onClick={e => { onDefaultClick(index); }}>
          {'set as thumbnail'}
        </CenterButtonContainer>
        <RightButtonContainer disabled={index === files.length - 1} onClick={e => { onRightClick(index); }}>
          <RightIcon fill='grey' />
        </RightButtonContainer>
      </SquareLayout>;
    })}
  </GridLayout>;
};

export default ImagePreviewScreen;