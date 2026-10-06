import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    const location = useLocation();

    const isHome = location.pathname === "/";

    useEffect(() => {
        if (!openMenu) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpenMenu(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [openMenu]);

    useEffect(() => {
        // On surveille les sections uniquement sur l'accueil
        if (!isHome) return;

        const sectionIds = [
            "hero",
            "realisations",
            "a-propos",
            "contact",
        ];

        const handleScroll = () => {
            const headerOffset = 100;

            let currentSection = "hero";

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);

                if (!section) return;

                const rect = section.getBoundingClientRect();

                if (rect.top <= headerOffset) {
                    currentSection = id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isHome]);


    return (
        <div className="nav__container">
            <button
                type="button"
                className="burger"
                aria-label={openMenu ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
                aria-expanded={openMenu}
                onClick={() => setOpenMenu(!openMenu)}
                aria-controls="main-navigation"
            >
                <span className={openMenu ? "open" : ""}></span>
                <span className={openMenu ? "hide" : ""}></span>
                <span className={openMenu ? "open" : ""}></span>
            </button>

            <nav
                id="main-navigation"
                aria-label="Navigation principale"
                className={`${openMenu ? "open" : ""} nav__item`}
            >
                {/* ACCUEIL */}
                {isHome ? (
                    <ScrollLink
                        to="hero"
                        smooth
                        offset={-100}
                        className={
                            activeSection === "hero"
                                ? "active"
                                : ""
                        }
                        aria-current={
                            activeSection === "hero"
                                ? "location"
                                : undefined
                        }
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>Accueil</span>
                    </ScrollLink>
                ) : (
                    <Link
                        to="/"
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>Accueil</span>
                    </Link>
                )}

                {/* RÉALISATIONS */}
                {isHome ? (
                    <ScrollLink
                        to="realisations"
                        smooth
                        offset={-100}
                        className={
                            activeSection === "realisations"
                                ? "active"
                                : ""
                        }
                        aria-current={
                            activeSection === "realisations"
                                ? "location"
                                : undefined
                        }
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>Mes réalisations</span>
                    </ScrollLink>
                ) : (
                    <Link
                        to="/"
                        state={{ scrollTo: "realisations" }}
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>Mes réalisations</span>
                    </Link>
                )}

                {/* À PROPOS */}
                {isHome ? (
                    <ScrollLink
                        to="a-propos"
                        smooth
                        offset={-50}
                        className={
                            activeSection === "a-propos"
                                ? "active"
                                : ""
                        }
                        aria-current={
                            activeSection === "a-propos"
                                ? "location"
                                : undefined
                        }
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>À propos</span>
                    </ScrollLink>
                ) : (
                    <Link
                        to="/"
                        state={{ scrollTo: "a-propos" }}
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>À propos</span>
                    </Link>
                )}

                {/* CONTACT */}
                {isHome ? (
                    <ScrollLink
                        to="contact"
                        smooth
                        offset={-100}
                        className={
                            activeSection === "contact"
                                ? "active"
                                : ""
                        }
                        aria-current={
                            activeSection === "contact"
                                ? "location"
                                : undefined
                        }
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>Contact</span>
                    </ScrollLink>
                ) : (
                    <Link
                        to="/"
                        state={{ scrollTo: "contact" }}
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>Contact</span>
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default Navigation;