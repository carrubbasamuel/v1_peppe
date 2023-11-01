"use client"

import { Fade } from 'react-reveal'
import DynamicArticle from './dynamicArticle/dynamic-article'
import CarouselCostum from './carousel-costum/carousel-costum'
import LinkComponent from '../../link-component/link-component'
import Typewriter from '../../typewriter/Typewriter'
import './style.css'


const SecondSection = () => {

    return (
        <section id='second'>
            <Fade bottom cascade>
                <div className='d-flex justify-content-end w-100'>
                    <LinkComponent text={'About Us'} />
                </div>

                <div className='w-100'>
                    <div className='d-flex justify-content-start w-100'>
                        <Typewriter text={'" Discover Our Story "'} />
                    </div>
                    <hr />
                    <h2>Designing the future, today - welcome to our architecture.</h2>
                </div>
            </Fade>


            <div className='main-container'>
                <Fade left>
                    <CarouselCostum />
                </Fade>
                <Fade right>
                    <DynamicArticle />
                </Fade>
            </div>

        </section>
    )
}

export default SecondSection;
