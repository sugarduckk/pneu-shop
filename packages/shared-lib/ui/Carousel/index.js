import React from 'react';
import CarouselLeft from '../../icon/CarouselLeft';
import CarouselRight from '../../icon/CarouselRight';
import LeftIcon from '../../icon/LeftIcon';
import RightIcon from '../../icon/RightIcon';
import CarouselCardContainer from './CarouselCardContainer';
import CarouselContainer from './CarouselContainer';
import CarouselInside from './CarouselInside';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

const Carousel = ({ data, Card }) => {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(pre => {
        return (pre + 1) % data.length;
      });
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [data.length]);
  const goLeft = React.useCallback(e => {
    setCurrent(c => c - 1);
  }, []);
  const goRight = React.useCallback(e => {
    setCurrent(c => c + 1);
  }, []);
  return <CarouselContainer>
    <CarouselInside n={data.length} current={current}>
      {data.map((d, index) => {
        return <CarouselCardContainer key={index}>
          <Card data={d} />
        </CarouselCardContainer>;
      })}
    </CarouselInside>
    <LeftContainer disabled={current === 0} onClick={goLeft}>
      <CarouselLeft fill='rgba(0, 0, 0, 0.5)' />
    </LeftContainer>
    <RightContainer disabled={current === data.length - 1} onClick={goRight}>
      <CarouselRight fill='rgba(0, 0, 0, 0.5)' />
    </RightContainer>
  </CarouselContainer>;
};

export default Carousel;