'use client'
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import Typewriter from '../components/typewriter/Typewriter';
import './style.css';

const ContactPage = () => {
    return (
        <div id='contact'>
            <img src="/asset/img-contact.jpg" alt="" />
            <div className='contact-text'>
                <div className="container container-contact">
                    <div>
                        <div>
                            <Typewriter text={'Contact Us '} />
                        </div>
                        <div>
                            <p>Hai un proggetto in mente ? Parliamo dei dettagli</p>
                        </div>

                        <div className='contact-info'>
                            <h2>Chiamaci</h2>
                            <p>+39 123 456 789</p>
                        </div>

                        <div className='contact-social'>
                        <FaInstagram />
                        <FaFacebookF />
                        <RiTwitterXFill />
                        <FaLinkedinIn />
                        </div>



                    </div>

                    <div className='contact-form'>
                        <form>
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div>
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
