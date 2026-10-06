import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <main className="not-found">
            <div className="not-found__container">
                <p className="not-found__code" aria-hidden="true">
                    404
                </p>

                <h1>Cette page n’existe pas</h1>

                <p className="not-found__text">
                    Il semblerait que cette strate se soit perdue en chemin.
                    La page que vous recherchez n’existe pas ou a peut-être
                    été déplacée.
                </p>

                <Link to="/" className="not-found__link cta">
                    Retour à l’accueil
                </Link>
            </div>
        </main>
    );
};

export default NotFound;