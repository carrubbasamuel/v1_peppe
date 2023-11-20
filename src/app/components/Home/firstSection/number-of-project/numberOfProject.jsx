"use client"

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-reveal';
import './style.css';

export default function NumberOfProject() {
    const [client, setClient] = useState(0);
    const [project, setProject] = useState(0);
    const [square, setSquare] = useState(0);

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView && client < 64) {
            const interval = setInterval(() => {
                setClient((prevClient) => prevClient + 1);
            }, 50);

            return () => clearInterval(interval);
        }
    }, [inView, client]);

    useEffect(() => {
        if (inView && project < 128) {
            const interval2 = setInterval(() => {
                setProject((prevProject) => prevProject + 1);
            }, 20);

            return () => clearInterval(interval2);
        }
    }, [inView, project]);

    useEffect(() => {
        if (inView && square < 256) {
            const interval3 = setInterval(() => {
                setSquare((prevSquare) => prevSquare + 1);
            }, 10);

            return () => clearInterval(interval3);
        }
    }, [inView, square]);

    return (
        <div ref={ref} className="date-container">
            <div>
                <Fade bottom cascade delay={10}>
                    <h1>{client}</h1>
                    <h3>Clients Around the World</h3>
                </Fade>

            </div>

            <div>
                <Fade bottom cascade delay={30}>
                    <h1>{project}</h1>
                    <h3>Projects Completed</h3>
                </Fade>
            </div>

            <div>
                <Fade bottom cascade delay={60}>
                    <h1>{square}K</h1>
                    <h3>Square Feet</h3>
                </Fade>
            </div>

        </div>
    );
}

