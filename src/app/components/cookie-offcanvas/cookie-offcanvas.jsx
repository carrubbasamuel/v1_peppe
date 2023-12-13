"use client";

import { setCookieConsent } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import './style.css';

const CookieConsentOffcanvasBootstrap = () => {
    const dispatch = useAppDispatch();
    const cookieConsent = useAppSelector((state) => state.user.coockieAccepted);
    const [show, setShow] = useState(true);

    const handleAccept = () => {
        setShow(false);
        dispatch(setCookieConsent());
    };

    useEffect(() => {
        if (cookieConsent) {
            setShow(false);
        }
    }, [cookieConsent]);

    // Se l'utente non ha accettato i cookie, mostra la finestra di consenso
    if (!cookieConsent) {
        return (
            <Offcanvas show={show} onHide={() => setShow(false)} placement="bottom" style={{ zIndex: 1050 }}>
                <Offcanvas.Body>
                    <div className='body-offcanvas-coockie'>
                        <h4 style={{ marginBottom: '20px', fontSize: '20px', color: '#333' }}>
                            Utilizziamo i cookie per offrirti la migliore esperienza utente.
                        </h4>
                        <p style={{ marginBottom: '20px', fontSize: '16px', color: '#333' }}>
                            Il nostro sito utilizza i cookie per offrirti la migliore esperienza utente.
                            Per saperne di più e gestire le tue preferenze sui cookie, consulta la nostra{" "}
                            <a href="/politica-cookie" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
                                politica sui cookie
                            </a>{" "}
                            e la nostra{" "}
                            <a href="/informativa-privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
                                informativa sulla privacy
                            </a>
                            .
                        </p>
                        <Button
                            variant="primary"
                            onClick={handleAccept}
                            style={{ borderRadius: '20px', backgroundColor: '#000', color: '#fff' }}
                        >
                            Accetta
                        </Button>
                        <Button
                            variant="link"
                            href="/gestione-cookie"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#000' }}
                        >
                            Gestisci preferenze cookie
                        </Button>

                        <br />

                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        );
    }

    return null;
};

export default CookieConsentOffcanvasBootstrap;
