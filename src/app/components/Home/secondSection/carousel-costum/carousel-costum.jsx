'use client'

import { useEffect, useRef, useState } from 'react';
import carouselJSON from './carousel-img.json';
import './style.css';

const CarouselCostum = ({reference}) => {
    console.log(reference);
    const [photos, setPhotos] = useState(null);
    const img = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const refImage = carouselJSON.find((item) => item.type === reference);
        if (refImage) {
            setPhotos(refImage.url);
            setIsAnimating(true);
            setTimeout(() => {
                
                setIsAnimating(false);
            }, 500); // Tempo di attesa per l'animazione (in millisecondi)
        } else {
            setPhotos(null);
            setIsAnimating(false);
        }
    }, [reference]);

    return (
        <div className='d-flex flex-column'>
            <div className={`astral-carousel ${isAnimating ? 'animate' : ''}`}>
                {photos ? <img ref={img} src={photos} alt=""/> : null}
            </div>
        </div>
    )
}

export default CarouselCostum;
