import { useState } from "react";

const Navigation = () => {
    const [showCross, setShowCross] = useState(false);
    const { openMenu, setOpenMenu } = useState(false);
    

    useEffect(() => {
        setOpenMenu(false);
    }, [setOpenMenu]);

    useEffect(() => {
        let timer;

        if (openMenu) {
        timer = setTimeout(() => {
            setShowCross(true);
        }, 300); // délai de 300ms
        } else {
        setShowCross(false);
        }

        return () => clearTimeout(timer);
    }, [openMenu]);

    return (
        <div className="nav__container">
            <button 
            type="button"
            aria-label={openMenu ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={openMenu}
            aria-controls="main-navigation">
                {!showCross ? 
                    // <Burger /> 
                    'burger'
                    : 
                    // <Croix />
                    'croix'
                }
            </button>
            <nav id="main-navigation" aria-label="Navigation principale" className={`${openMenu ? "open" : ""} nav__item`}>
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
        </div>
    )
}