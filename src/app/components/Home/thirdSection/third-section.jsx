'use client'


import { Fade } from 'react-reveal';
import LinkComponent from '../../link-component/link-component';
import Typewriter from '../../typewriter/Typewriter';
import ChangeSubtitle from './changeSub';
import './style.css';

const ThirdSection = () => {
    return (
        <section id='terza'>
            <div className='box-title w-100'>
                <div className='d-flex justify-content-between'>
                    <Fade bottom cascade>
                        <div className='d-flex align-items-start justify-content-start'>
                            <div>
                                <Typewriter text={'"Stay Connected"'} />
                            </div>

                        </div>
                        <LinkComponent text={'Contact Us'} />

                    </Fade>
                </div>
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
