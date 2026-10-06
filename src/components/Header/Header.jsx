import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../svg/Logo";
import "./Header.scss";

const Header = () => {
    const [isHeroActive, setIsHeroActive] = useState(true);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById("hero");

            if (!hero) return;

            const headerOffset = 100;
            const rect = hero.getBoundingClientRect();

            // Le Hero est actif tant que la section suivante
            // n'a pas atteint la zone du header
            const isActive = rect.bottom > headerOffset;

            setIsHeroActive(isActive);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <div className="header__container">

                {!isHome ? (
                <Link
                    to="/"
                    className="header__logo active"
                    aria-label="Retour à l'accueil"
                >
                    <Logo />
                </Link>
                ) : isHeroActive ? (
                    <div className="header__logo">
                        <Logo />
                    </div>
                ) : (
                    <ScrollLink
                        to="hero"
                        smooth
                        offset={-100}
                        className="header__logo active"
                        aria-label="Retour à l'accueil"
                    >
                        <Logo />
                    </ScrollLink>
                )}

                <Navigation />

            </div>
        </header>
    );
};

export default Header;