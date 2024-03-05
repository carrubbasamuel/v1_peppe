'use client'
import { Fade } from 'react-reveal';
import DownloadButton from '../../downloadButton/downloadButton';
import LinkComponent from '../../link-component/link-component';
import Typewriter from '../../typewriter/Typewriter';
import './style.css';

export default function DownloadSection() {
    return (
        <section className='my-5'>

            <div className="download-section">
                <Fade bottom cascade>
                    <div className='about-link'>
                        <LinkComponent text={'All Project'} />
                    </div>
                    <div className='third-title'>
                        <Typewriter text={'"Lorem ipsum "'} />
                    </div>
                </Fade>
                <Fade bottom>
                    <p className='subtitle'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum fugiat laboriosam officiis labore provident, suscipit, sapiente dolore sit beatae cum placeat sint! Veritatis omnis est iure. Autem aperiam iure cum?
                    </p>
                </Fade>
            </div>
            <Fade bottom>
                <DownloadButton />
            </Fade>
        </section >
    );
}