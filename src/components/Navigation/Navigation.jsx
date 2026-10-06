import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === "/";

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

    const handleNavigation = (sectionId) => {
        setOpenMenu(false);

        navigate("/", {
            state: {
                scrollTo: sectionId,
            },
        });
    };

    return (
        <div className="nav__container">
            <button
                type="button"
                className="burger"
                aria-label={openMenu ? "Fermer le menu" : "Ouvrir le menu"}
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
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>Mes réalisations</span>
                    </ScrollLink>
                ) : (
                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("realisations")
                        }
                    >
                        <span>Mes réalisations</span>
                    </button>
                )}

                {/* À PROPOS */}
                {isHome ? (
                    <ScrollLink
                        to="a-propos"
                        smooth
                        offset={-100}
                        className={
                            activeSection === "a-propos"
                                ? "active"
                                : ""
                        }
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>À propos</span>
                    </ScrollLink>
                ) : (
                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("a-propos")
                        }
                    >
                        <span>À propos</span>
                    </button>
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
                        onClick={() => setOpenMenu(false)}
                    >
                        <span>Contact</span>
                    </ScrollLink>
                ) : (
                    <button
                        type="button"
                        onClick={() =>
                            handleNavigation("contact")
                        }
                    >
                        <span>Contact</span>
                    </button>
                )}
            </nav>
        </div>
    );
};

export default Navigation;