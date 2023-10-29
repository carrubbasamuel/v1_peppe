"use client"

import { Col, Row } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import { Fade } from 'react-reveal';
import CarouselHome from '../components/carousel-home/carousel-home';
import WordCarousel from '../components/carousel-of-words/carousel-of-words';
import FirstSection from '../components/first-section-home/firstSection';
import IconSection from '../components/icon-section/icon-section';
import NumberOfProject from '../components/number-of-project/numberOfProject';
import SecondSection from '../components/second-section-home/second-section';
import './style.css';


export default function Home() {
    return (
        <Fade>
            <div id="home">
            <Fade>
                <CarouselHome />
            </Fade>
            

            <section>
                <FirstSection />

                <Row className='pro'>
                    <Col>
                        <Fade bottom cascade>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Feasibility Studies</p> </div>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Conceptual Design</p></div>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Design Development</p></div>
                        </Fade>
                    </Col>
                    <Col>
                        <Fade bottom cascade>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Permitting and Approvals</p></div>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Construction Documents</p></div>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Bidding and Negotiation</p></div>
                        </Fade>
                    </Col>
                    <Col>
                        <Fade bottom cascade>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Construction Administration</p></div>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Post-Occupancy Evaluation</p></div>
                            <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Project Management</p></div>
                        </Fade>
                    </Col>
                </Row>

                <NumberOfProject />
            </section>
            <Fade>
                <WordCarousel />
            </Fade>

            <SecondSection />
            <IconSection />
        </div>
        </Fade>
        
    )
}