import "./Maintenance.scss";
import Logo from "../components/svg/Logo";

const Maintenance = () => {
    return (
        <main className="maintenance">
            <div className="maintenance__container">
                
                <img src="img/picto.png" alt="" />

                <Logo />

                <h1>En maintenance</h1>

                <span className="maintenance__separator" />

                <h2>Le site se refait une beauté</h2>

                <p>
                    Notre atelier numérique est momentanément
                    en pause, le temps de quelques ajustements.
                </p>

                <p>
                    Nous serons très bientôt de retour.
                </p>

                <a href="mailto:lea.l@me.com">
                    Nous contacter
                </a>
            </div>
        </main>
    );
};

export default Maintenance;