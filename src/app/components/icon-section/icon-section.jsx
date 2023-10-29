"use client";
import { FaCreativeCommonsSa, FaGlobeAfrica } from 'react-icons/fa';
import { LiaArtstation, LiaDigitalOcean } from 'react-icons/lia';
import { Fade } from 'react-reveal';
import './style.css';

const IconSection = () => {
    return (
        <div className='container-icon'>
            <Fade bottom>
                <Fade right delay={200}>
                    <div>
                        <FaGlobeAfrica size={70} className='icon' />
                        <div className='number'>
                            <p>1.</p>
                        </div>
                    </div>
                    <hr className='ms-3' />
                </Fade>
                <Fade right delay={400}>
                    <hr className='me-3' />
                    <div>
                        <FaCreativeCommonsSa size={70} className='icon' />
                        <div className='number'>
                            <p>2.</p>
                        </div>
                    </div>
                    <hr className='ms-3' />
                </Fade>
                <Fade right delay={600}>
                    <hr className='me-3' />
                    <div>
                        <LiaArtstation size={70} className='icon' />
                        <div className='number'>
                            <p>3.</p>
                        </div>
                    </div>
                    <hr className='ms-3' />
                </Fade>
                <Fade right delay={800}>
                    <hr className='me-3' />
                    <div>
                        <LiaDigitalOcean size={70} className='icon' />
                        <div className='number'>
                            <p>4.</p>
                        </div>
                    </div>
                </Fade>
            </Fade>
        </div>
    )
}

export default IconSection;
