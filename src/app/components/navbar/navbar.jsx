'use client'

import { logout } from '@/lib/features/user/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useAppSelector } from '../../../lib/hooks';
import './style.css';

export default function NavBar() {
    
    const dispatch = useAppDispatch();
    const router = usePathname();
    
    const [scrolled, setScrolled] = useState(false);
    const [log, setLog] = useState(null);
    const [dropOpen, setDropOpen] = useState(false);

    
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        setLog(user);
    }, [user]);

    useEffect(() => {
        if (window.scrollY > 100) {
            setScrolled(true);
        }
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById('dropdown');
            if (dropdown && !dropdown.contains(event.target)) {
                setDropOpen(false);
            }
        };

        if (dropOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropOpen]);

    const handleUserImageClick = () => {
        setDropOpen(!dropOpen);
    };

    if(router === '/login' || router ==='/signup') return null;

    return (
        <div id={router !== '/' ? 'nav-pages' : 'navbar'} className={scrolled && router === '/' ? 'nav-scroll' : ''}>
            <div>
                <div className='navbar'>
                    <div className='d-flex justify-content-between  m-4'>
                        <div className="logo">
                            <Image src={scrolled || router !== '/' ? "/asset/logo.png" : "/asset/logo-light.png"} alt="logo" width={120} height={30} />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a className={router === '/' ? "active-location " : null} href="/">Home</a></li>
                                <li><a className={router === '/about' ? "active-location " : null} href="/about">About</a></li>
                                <li><a className={router === '/contact' ? "active-location " : null} href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="user-container" onClick={handleUserImageClick}>
                            {(log && log.user) ? (
                                <div className="user">
                                    <div className="user-image">
                                        <Image src={log?.user.photoURL} alt="user" width={30} height={30} />
                                    </div>
                                    {dropOpen && (
                                        <div id='dropdown' className="dropdown">
                                            <p>Nome Utente: {log?.user.displayName}</p>
                                            <p>Email: {log?.user.email}</p>
                                            <a onClick={()=> dispatch(logout())}>Logout</a>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="login">
                                    <a href="/login">Login</a>
                                    <FaArrowCircleRight />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}