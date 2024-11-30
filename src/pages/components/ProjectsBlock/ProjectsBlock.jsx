import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './ProjectsBlock.scss'
import vector_back from '../../../assets/assets/vector-back.jpg'
import vector_next from '../../../assets/assets/vector-next.jpg'
import forum from '../../../assets/assets/finatlon-forum-logo.png'
import pro from '../../../assets/assets/finatlon-pro-logo.png'

const ProjectsBlock = () => {
    return (
        <CarouselProvider
        naturalSlideWidth={90}
        naturalSlideHeight={90}
        totalSlides={4}
        >
            <div class="main-container__projects-block projects-block">
                <p class="projects-block__title">ПРОЕКТЫ ФИНАТЛОНА</p>
                <div className='projects-block__media-carousel'>
                <ButtonBack className='projects-block__btn-navigation'><img src={vector_back} alt="" className='projects-block__btn-vector'/></ButtonBack>
                <Slider className="projects-block__media">
                    <Slide index={0} className='projects-block__img'>
                        <img src={forum} alt="" class="projects-block__img" />
                        <img src={pro} alt="" class="projects-block__img" />
                    </Slide>
                    <Slide index={1} className='projects-block__img'>
                        <img src={forum} alt="" class="projects-block__img" />
                        <img src={pro} alt="" class="projects-block__img" />
                    </Slide>
                    <Slide index={2} className='projects-block__img'>
                        <img src={forum} alt="" class="projects-block__img" />
                        <img src={pro} alt="" class="projects-block__img" />
                    </Slide>
                    <Slide index={3} className='projects-block__img'>
                        <img src={forum} alt="" class="projects-block__img" />
                        <img src={pro} alt="" class="projects-block__img" />
                    </Slide>
                </Slider>
                <ButtonNext className='projects-block__btn-navigation'><img src={vector_next} alt="" className='media-block__btn-vector'/></ButtonNext>
                </div>
                </div>
        </CarouselProvider>
    );
};

export default ProjectsBlock;