"use client"


import { Fade } from 'react-reveal';
import './style.css';

export default function WordCarousel() {
  return (
    <Fade>

    <div className="text-container">
      <div className="word animated1">
        <span>Construction</span>
        <span>Interior Design</span>
        <span>Modern Structures</span>
        <span>Thinking outside of the box</span>
      </div>
      <div className='word animated2'>
        <span>Construction</span>
        <span>Interior Design</span>
        <span>Modern Structures</span>
        <span>Thinking outside of the box</span>
      </div>
    </div>
    </Fade>
  );
};

