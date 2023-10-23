"use client"

import { FaArrowUp } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import './style.css';

export default function FirstSection() {
    return (
        <div className='d-flex' style={{ gap: '300px' }}>
            <div className='title'>
                <h1 className='typewriter'>
                    <Typewriter text={'We specialized in these field.'} />
                </h1>
                <Fade bottom>
                    <h2 className='elementor-subtitle'>
                        The homepage of an architecture website serves as the first impression for visitors and should provide a compelling overview of the architecture firm and its offerings.
                    </h2>
                </Fade>
            </div>

            {/* Link */}
            <div className='d-flex justify-content-start align-items-end'>
                <Fade bottom>
                    <div className='d-flex justify-content-center align-items-center position-relative'>
                        <p className='service-link'>All Services</p>
                        <FaArrowUp size={20} className='ms-2 arrow-service position-absolute' />
                    </div>
                </Fade>
            </div>

        </div>
    )
}

const Typewriter = ({ text }) => {
    return (
        <Fade cascade>
            {text}
        </Fade>
    );
}


