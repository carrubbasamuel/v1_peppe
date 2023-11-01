"use client"

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './style.css';

export default function NavBar() {
    const router = usePathname();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if(window.scrollY > 100){
            setScrolled(true);
        }
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }
    }, []);

  

    return (
        <div id="navbar" className={scrolled ? 'nav-scroll' : ''}>
        <div>
            <div className='navbar'>
                <div className='d-flex justify-content-between w-100 m-4'>
                    <div className="logo">  
                        <Image src={scrolled ? "/asset/logo.png" : "/asset/logo-light.png"} alt="logo"  width={120} height={30}/>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a className={router === '/' ? "active-location " : null} href="/">Home</a></li>
                            <li><a className={router === '/about' ? "active-location " : null} href="/about">About</a></li>
                            <li><a className={router === '/contact' ? "active-location " : null} href="/contact">Contact</a></li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    </div>

    )
}
