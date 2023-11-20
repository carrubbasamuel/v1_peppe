'use client'

import { Fade } from 'react-reveal';
import { useMediaQuery } from 'react-responsive';
import LinkComponent from '../../link-component/link-component';
import Typewriter from '../../typewriter/Typewriter';
import CarouselCostum from './carousel-costum/carousel-costum';
import DynamicArticle from './dynamicArticle/dynamic-article';
import './style.css';

const SecondSection = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 }); 

    return (
        <section id='second'>
            <Fade bottom cascade>
                <div className={`d-flex justify-content-end link-section ${isMobile ? 'mobile' : ''}`}>
                    <LinkComponent text={'About Us'} />
                </div>

                <div className='container-text'>
                    <div>
                        <Typewriter text={'" Discover Our Story "'} />
                    </div>
                    <div>
                        <hr />
                        <h2>Designing the future, today - welcome to our architecture.</h2>
                    </div>
                </div>
            </Fade>

            <div className='main-container'>
                <Fade left={!isMobile} bottom={isMobile}>
                    <CarouselCostum />
                </Fade>
                <Fade right={!isMobile} bottom={isMobile}>
                    <DynamicArticle />
                </Fade>
            </div>
        </section>
    );
}

export default SecondSection;
