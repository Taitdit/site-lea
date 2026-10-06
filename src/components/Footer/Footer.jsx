import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import Logo from "../svg/Logo";

import "./Footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === "/";

    const handleNavigation = (sectionId) => {
        navigate("/", {
            state: {
                scrollTo: sectionId,
            },
        });
    };

    const renderNavLink = (sectionId, label) => {
        if (isHome) {
            return (
                <ScrollLink
                    to={sectionId}
                    smooth
                    offset={-100}
                >
                    {label}
                </ScrollLink>
            );
        }

        return (
            <button
                type="button"
                onClick={() => handleNavigation(sectionId)}
            >
                {label}
            </button>
        );
    };

    return (
        <footer className="footer">
            <div className="footer__overlay" />

            <div className="footer__container">
                <div className="footer__top">

                {isHome ? (
                    <ScrollLink
                        to="hero"
                        smooth
                        offset={-100}
                        className="footer__logo"
                        aria-label="Retour à l'accueil"
                    >
                        <Logo />
                    </ScrollLink>
                ) : (
                    <Link
                        to="/"
                        className="footer__logo"
                        aria-label="Retour à l'accueil"
                    >
                        <Logo />
                    </Link>
                )}

                    <nav
                        className="footer__nav"
                        aria-label="Navigation secondaire"
                    >
                           {renderNavLink("realisations", "Mes réalisations")}
                            {renderNavLink("a-propos", "À propos")}
                            {renderNavLink("contact", "Contact")}
                    </nav>
                </div>

                <div className="footer__bottom">
                    <p>
                        © {currentYear} Strates — Tous droits réservés
                    </p>

                    <Link
                        to="/mentions-legales"
                        className={
                            location.pathname === "/mentions-legales"
                                ? "active"
                                : ""
                        }
                    >
                        Mentions légales
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;