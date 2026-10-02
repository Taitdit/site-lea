import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    return (
        <header>
            
            <nav>
                <ScrollLink to="accueil" smooth>
                    Accueil
                </ScrollLink>

                <ScrollLink to="realisations" smooth>
                    Mes réalisations
                </ScrollLink>

                <ScrollLink to="a-propos" smooth>
                    À propos
                </ScrollLink>

                <ScrollLink to="contact" smooth>
                    Contact
                </ScrollLink>

            </nav>
        </header>
    )
}
export default Header