"use client"

import LinkComponent from '@/app/components/link-component/link-component';
import Typewriter from '@/app/components/typewriter/Typewriter';
import { Fade } from 'react-reveal';
import NumberOfProject from './number-of-project/numberOfProject';
import PlusNotation from './plus-notation/plusNotation';
import './style.css';

export default function FirstSection() {
    return (

        <section id='first'>
            <div className="d-flex containerfirst" >
                <Fade bottom cascade>
                <div className='title'>

                    <Typewriter text={'We specialized in these fields.'} />

                    <hr />
                    <Fade bottom>
                        <h2 className='elementor-subtitle'>
                            The homepage of an architecture website serves as the first impression for visitors and should provide a compelling overview of the architecture firm and its offerings.
                        </h2>
                    </Fade>
                </div>
            </Fade>

            <LinkComponent text={'All Services'} />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <PlusNotation />
                <NumberOfProject />
            </div>

        </section>

    )
}





