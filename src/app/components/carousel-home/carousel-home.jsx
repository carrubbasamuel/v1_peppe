"use client"


import Image from 'next/image';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { Fade } from 'react-reveal';
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



export default function CarouselHome() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <Fade>
            <Slider {...settings}>
                {carouselImg.map((item, index) => (
                    <div key={index}>
                        <div className='carousel-div-text'></div>
                            <Image src={item.img} alt="img-carousel" width={9999} height={9999} />
                        <div className='main-text'>
                            <p className='carousel-cap'>{item.caption}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </Fade>
    );
}


