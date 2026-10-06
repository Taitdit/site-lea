import { useEffect, useState } from 'react';
import './Hero.scss';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="hero">
            <div className="hero">
                <img src="/img/hero.webp" alt="" />

                <h1
                    className="hero__title"
                    style={{
                        transform: `translateY(${scrollY}px)`
                    }}
                >
                    <b>strates</b>
                    Métallerie d'art et matière minérale
                </h1>
            </div>
        </section>
    );
};

export default Hero;