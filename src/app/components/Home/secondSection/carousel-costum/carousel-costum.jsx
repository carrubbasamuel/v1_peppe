'use client'

import { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import carouselJSON from './carousel-img.json';
import './style.css';

const CarouselCostum = () => {
    const [photos, setPhotos] = useState(carouselJSON);
    const [activeIndex, setActiveIndex] = useState(0);

    const rightElementRef = useRef(null);
    const leftElementRef = useRef(null);
    const centerElementRef = useRef(null);


    const handlePrev = () => {
        if (rightElementRef.current && leftElementRef.current && centerElementRef.current) {
            leftElementRef.current.classList.add('moveInRight');
            rightElementRef.current.classList.add('moveInCenter');
            centerElementRef.current.classList.add('moveInLeft');

            setTimeout(() => {
                const lastPhoto = photos[photos.length - 1];
                const restPhotos = photos.slice(0, -1);
                setPhotos([lastPhoto, ...restPhotos]);
                setActiveIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
            }, 1000);
        }
        else return;
    }

    const handleNext = () => {
        if (rightElementRef.current && leftElementRef.current && centerElementRef.current) {
            rightElementRef.current.classList.add('moveOutRight');
            leftElementRef.current.classList.add('moveOutLeft');
            centerElementRef.current.classList.add('moveOutCenter');
    
            setTimeout(() => {
                const [firstPhoto, ...restPhotos] = photos;
                setPhotos([...restPhotos, firstPhoto]);
                setActiveIndex(prev => (prev + 1) % photos.length);
            }, 1000);
        } else return;
    }

    useEffect(() => {
        if (rightElementRef.current && leftElementRef.current && centerElementRef.current) {
            rightElementRef.current.classList.remove('moveOutRight');
            leftElementRef.current.classList.remove('moveOutLeft');
            centerElementRef.current.classList.remove('moveOutCenter');

            rightElementRef.current.classList.remove('moveInRight');
            leftElementRef.current.classList.remove('moveInLeft');
            centerElementRef.current.classList.remove('moveInCenter');
        }

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [photos]);

    

    return (
        <div className='d-flex flex-column'>
            <div className='astral-carousel'>
                {
                    photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className={`astral-carousel-item ${index === activeIndex ? 'center' : index === activeIndex - 1 || (activeIndex === 0 && index === photos.length - 1) ? 'left' : 'right'}`}
                            ref={el => {
                                if (index === activeIndex) centerElementRef.current = el;
                                if (index === (activeIndex - 1 + photos.length) % photos.length) leftElementRef.current = el;
                                if (index === (activeIndex + 1) % photos.length) rightElementRef.current = el;
                            }}
                        >
                            <img src={photo.url} alt='img' />
                        </div>
                    ))
                }
            </div>
            <div className='astral-carousel-control-container'>
                <p className='astral-carousel-control astral-carousel-control-prev' onClick={handlePrev}>
                    <AiOutlineArrowLeft />
                </p>
                <p className='astral-carousel-control astral-carousel-control-next' onClick={handleNext}>
                    <AiOutlineArrowRight />
                </p>
            </div>
        </div>
    )
}

export default CarouselCostum;
