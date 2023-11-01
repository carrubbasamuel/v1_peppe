"use client"

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './style.css';

export default function ChangeSubtitle() {
    const wordGreetings = [
        'Hello',
        'Hola',
        'Bonjour',
        'Ciao',
        'Hallo',
        'Hej',
        'Aloha',
        'Konnichiwa',
        'Namaste',
        'Salaam',
        'Merhaba',
        'Szia',
        'Ni Hao',
        'Shalom',
        'Salam',
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLetterIndex(prev => prev + 1);

            if (currentLetterIndex === wordGreetings[currentWordIndex].length) {
                setTimeout(() => {
                    setCurrentLetterIndex(0);
                    setCurrentWordIndex(prev => (prev + 1) % wordGreetings.length);
                }, 1000);
            }

            if (currentWordIndex === wordGreetings.length) {
                setCurrentWordIndex(0);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [currentLetterIndex, currentWordIndex]);
    return (
        <div className='stay-connected'>
            <h1>
                Have a project in mind?
            </h1>
            <p>
                Do not hesitate to say {wordGreetings[currentWordIndex].slice(0, currentLetterIndex).replace(/'/g, '&rsquo;')}
            </p>
            <div className='talk-button'>
                <p>
                    Let&apos;s Talk <FaArrowUp size={15} className='arrow-stay-connected' />
                </p>

            </div>

        </div>
    )
}
