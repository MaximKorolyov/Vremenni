import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup, ButtonNext, ButtonBack } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import photo1 from '../../../assets/assets/photo-1.jpg'
import vector_back from '../../../assets/assets/vector-back.jpg'
import vector_next from '../../../assets/assets/vector-next.jpg'
import './CarouselComponents.scss';

const MediaCarousel = () => {
  return (
    <CarouselProvider
     naturalSlideWidth={100}
     naturalSlideHeight={60}
     totalSlides={4}
    >
    <div className="main-container__media-block media-block">
      <div className="media-block__btns-block">
        <p className="media-block__btn media-block__btn_enabled">ФОТОГАЛЕРЕЯ</p>
        <p className="media-block__btn media-block__btn_disabled">ВИДЕОГАЛЕРЕЯ</p>
      </div>
        <div className='media-block__media-carousel'>
        <ButtonBack className='media-block__btn-navigation'><img src={vector_back} alt="" className='media-block__btn-vector'/></ButtonBack>
          <Slider className="media-block__media">
              <Slide index={0} className='media-block__img'><img src={photo1} alt="" className="media-block__img" /></Slide>
              <Slide index={1} className='media-block__img'><img src={photo1} alt="" className="media-block__img" /></Slide>
              <Slide index={2} className='media-block__img'><img src={photo1} alt="" className="media-block__img" /></Slide>
              <Slide index={3} className='media-block__img'><img src={photo1} alt="" className="media-block__img" /></Slide>
          </Slider>
        <ButtonNext className='media-block__btn-navigation'><img src={vector_next} alt="" className='media-block__btn-vector'/></ButtonNext>
        </div>
      <DotGroup className='media-block__dot-group' /> 
    </div>
   </CarouselProvider>
  );
};

export default MediaCarousel;
