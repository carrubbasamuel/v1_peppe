import { FiPlus } from 'react-icons/fi';
import { Fade } from 'react-reveal';
import './style.css';

const PlusNotation = () => {
    return (
        <div className='pro-container'>
            <div>
                <Fade bottom cascade>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Feasibility Studies</p> </div>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Conceptual Design</p></div>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Design Development</p></div>
                </Fade>
            </div>

            <div>
                <Fade bottom cascade>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Permitting and Approvals</p></div>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Construction Documents</p></div>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Bidding and Negotiation</p></div>
                </Fade>
            </div>

            <div>
                <Fade bottom cascade>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Construction Administration</p></div>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Post-Occupancy Evaluation</p></div>
                    <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Project Management</p></div>
                </Fade>
            </div>

        </div>
    );
}

export default PlusNotation;

