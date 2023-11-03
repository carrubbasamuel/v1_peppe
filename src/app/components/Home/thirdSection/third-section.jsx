'use client'


import { Fade } from 'react-reveal';
import LinkComponent from '../../link-component/link-component';
import Typewriter from '../../typewriter/Typewriter';
import ChangeSubtitle from './changeSub';
import './style.css';

const ThirdSection = () => {
    return (
        <section>
            <div id='third-section'>
                <Fade bottom cascade>

                    <div className='d-flex justify-content-end'>
                        <LinkComponent text={'Contact Us'} />

                    </div>

                    <div className='d-flex justify-content-start'>
                        <Typewriter text={'"Stay Connected"'} />
                    </div>


                </Fade>

                <hr />
                <Fade bottom>
                    <p className='subtitle'>
                        Stay connected with our team and never miss a design update, industry news, or special offer. Join our community of design enthusiasts.
                    </p>
                </Fade>
            </div>

            <ChangeSubtitle />
        </section >
    );
}

export default ThirdSection;
