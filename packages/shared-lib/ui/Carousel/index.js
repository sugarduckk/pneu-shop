import React from 'react';
import CarouselLeft from '../../icon/CarouselLeft';
import CarouselRight from '../../icon/CarouselRight';
import RowLayout from '../../layout/RowLayout';
import BottomContainer from './BottomContainer';
import CarouselCardContainer from './CarouselCardContainer';
import CarouselContainer from './CarouselContainer';
import CarouselInside from './CarouselInside';
import Circle from './Circle';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

const Carousel = ({ data, Card, onClick }) => {
  const [slideInterval, setSlideInterval] = React.useState()
  const [current, setCurrent] = React.useState(0);
  const changeCard = React.useCallback(() => {
    setCurrent(pre => {
      return (pre + 1) % data.length;
    });
  }, [data.length])
  React.useEffect(() => {
    setSlideInterval(setInterval(changeCard, 4000))
  }, [changeCard]);
  React.useEffect(() => {
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval)
      }
    }
  }, [slideInterval])
  const goLeft = React.useCallback(e => {
    setCurrent(c => c - 1);
    clearInterval(slideInterval)
    setSlideInterval(setInterval(changeCard, 4000))
  }, [changeCard, slideInterval]);
  const goRight = React.useCallback(e => {
    setCurrent(c => c + 1);
    clearInterval(slideInterval)
    setSlideInterval(setInterval(changeCard, 4000))
  }, [changeCard, slideInterval]);
  const goIndex = React.useCallback(index => {
    setCurrent(index);
    clearInterval(slideInterval)
    setSlideInterval(setInterval(changeCard, 4000))
  }, [changeCard, slideInterval]);
  return <CarouselContainer>
    <CarouselInside n={data.length} current={current}>
      {data.map((d, index) => {
        return <CarouselCardContainer key={index} onClick={() => {
          onClick(d);
        }}>
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
    <BottomContainer>
      <RowLayout>
        {data.map((d, index) => {
          return <Circle key={index} index={index} shown={index === current} goIndex={goIndex} />
        })}
      </RowLayout>
    </BottomContainer>
  </CarouselContainer>;
};

export default Carousel;