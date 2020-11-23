import React from 'react';
import { ContentContainer } from 'shared-lib/layout';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';

const LoadingContent = props => {
  return <ContentContainer>
    <DialogLoading />
  </ContentContainer>;
};

export default LoadingContent;