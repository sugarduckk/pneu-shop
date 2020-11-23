import React from 'react';
import styled from 'styled-components';
import Placeholder from '../res/Placeholder';

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  visibility: ${props => props.loaded ? 'visible' : 'hidden'};
  opacity: ${props => props.loaded ? '1' : '0'};
  transition: .2s;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImagePlaceholder = ({ src, ...otherProps }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [removePlaceholder, setRemovePlaceHolder] = React.useState(false);
  const onLoad = React.useCallback(e => {
    setLoaded(true);
  }, []);
  const onAnimationEnd = React.useCallback(e => {
    setRemovePlaceHolder(true);
  }, []);
  return <>
    {!removePlaceholder && <Placeholder />}
    {src && <Image src={src} loaded={loaded} {...otherProps} onLoad={onLoad} onAnimationEnd={onAnimationEnd} />}
  </>;
};

export default ImagePlaceholder;