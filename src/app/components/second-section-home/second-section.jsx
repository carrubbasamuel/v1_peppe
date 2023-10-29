"use client"

import { Fade } from 'react-reveal'
import ArticleSelection from '../article-selection/article-selection'
import CarouselDiscover from '../carousel-costum/carousel-discover'
import LinkComponent from '../link-component/link-component'
import Typewriter from '../typewrier/Typewriter'
import './style.css'


const SecondSection = () => {

    return (
        <>
            <Fade bottom cascade>
                <div id='second-section'>

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
                </div>
            </Fade>

            <Fade bottom>
                <div className='main-container'>
                    <CarouselDiscover />
                    <ArticleSelection />
                </div>
            </Fade>
        </>
    )
}

export default SecondSection;
