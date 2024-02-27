"use client"


import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carouselImg from './carousel-img.json';
import './style.css';



function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='pre-carousel' onClick={onClick}>
            <MdOutlineArrowBackIos />
        </div>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className='next-carousel' onClick={onClick}>
            <MdOutlineArrowForwardIos />
        </div>
    );
}



export default function MainCarousel() {
    const settings = {
        dots: true,
        fade: true,
        fadeSpeed: 100,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        stopOnHover: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
            <Slider {...settings}>
                {carouselImg.map((item, index) => (
                    <div key={index}>
                      
                        <img src={item.img} alt="img-carousel" loading="lazy"/>
                        <div className='main-text'>
                            <h1 className='carousel-cap'>{item.caption}</h1>
                        </div>
                    </div>
                ))}
            </Slider>
    );
}


