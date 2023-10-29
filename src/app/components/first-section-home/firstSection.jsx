"use client"

import Typewriter from '@/app/components/typewrier/Typewriter';
import LinkComponent from '@/app/components/link-component/link-component';
import { Fade } from 'react-reveal';
import './style.css';

export default function FirstSection() {
    return (
        <div className='d-flex' style={{ gap: '200px' }}>
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
    )
}





