"use client"



import { FaArrowUp } from 'react-icons/fa'
import { Fade } from 'react-reveal'
import './style.css'

const LinkComponent = ({ text }) => {
    return (
        
            <Fade bottom>
                <div className='d-flex justify-content-center align-items-end service-container'>
                    <p className='service-link'>{text}</p>
                    <FaArrowUp size={20} className='ms-2 mb-2 arrow-service' />
                </div>
            </Fade>
    )
}

export default LinkComponent