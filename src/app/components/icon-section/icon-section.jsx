'use client'


import { FaCreativeCommonsSa, FaGlobeAfrica } from 'react-icons/fa';
import { LiaArtstation, LiaDigitalOcean } from 'react-icons/lia';
import { useInView } from 'react-intersection-observer';
import './style.css';

const IconSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    })


    return (
        <div ref={ref} className='container-icon'>

            {inView && <>
                <div className='inner-icon'>
                    <div className='box'>
                        <FaGlobeAfrica size={70} className='icon' />
                        <div className='number'>
                            .1
                        </div>
                        <div className='line' style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <div className="box-text" style={{ animationDelay: '0.1s' }}>
                        <h5>
                            Consultation and initial meeting
                        </h5>
                        <p>
                            The architecture company meets with the client to discuss their needs, budget, and timeline. They may also visit the site to get a better understanding of the project
                        </p>
                    </div>

                </div>

                <div className='inner-icon'>
                    <div className='box' style={{ animationDelay: '0.4s' }}>
                        <LiaDigitalOcean size={70} className='icon' />
                        <div className='number'>
                            .2
                        </div>
                        <div className='line' style={{ animationDelay: '0.6s' }}></div>
                    </div>
                    <div className="box-text" style={{ animationDelay: '0.5s' }}>
                        <h5>
                            Concept design
                        </h5>
                        <p>
                            Based on the client requirements, the architecture company creates a concept design that outlines the overall vision for the project. This may include sketches, 3D models, or computer-generated renderings.
                        </p>
                    </div>

                </div>

                <div className='inner-icon'>
                    <div className='box' style={{ animationDelay: '0.8s' }}>
                        <LiaArtstation size={70} className='icon' />
                        <div className='number'>
                            .3
                        </div>
                        <div className='line' style={{ animationDelay: '1s' }}></div>
                    </div>
                    <div className="box-text" style={{ animationDelay: '0.9s' }}>
                        <h5>
                            Design development
                        </h5>
                        <p>
                            Once the client approves the concept design, the architecture company begins to develop detailed drawings and plans. This may involve collaborating with engineers, contractors, and other specialists to ensure that the design is feasible.
                        </p>
                    </div>

                </div>

                <div className='inner-icon '>
                    <div className='box' style={{ animationDelay: '1.2s' }}>
                        <FaCreativeCommonsSa size={70} className='icon' />
                        <div className='number'>
                            .4
                        </div>
                    </div>
                    <div className="box-text" style={{ animationDelay: '1.3s' }}>
                        <h5>
                            Permitting and approvals
                        </h5>
                        <p>
                            Before construction can begin, the architecture company must obtain the necessary permits and approvals from local authorities. This may involve submitting plans and documents for review and responding to any questions or co
                        </p>
                    </div>

                </div>

            </>}

        </div>
    )
}

export default IconSection;
