import "./Contact.scss";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2>Contact</h2>

                <div className="contact__content">
                    <p className="contact__intro">
                        Une envie, une idée, un projet ?
                    </p>

                    <p className="contact__text">
                        Vous souhaitez échanger autour d’une création, poser une
                        question ou simplement en savoir plus sur mon travail ?
                        Je serai ravie de vous répondre et de découvrir votre projet.
                    </p>

                    <p className="contact__name">Léa Lemoine</p>

                    <div className="contact__links">
                        <a
                            href="mailto:lea.l@me.com"
                            className="contact__link"
                            aria-label="Envoyer un e-mail à Léa Lemoine"
                        >
                            <span className="contact__label">Par e-mail</span>
                            <span className="contact__value">
                                lea.l@me.com
                            </span>
                        </a>

                        <a
                            href="tel:+33642940094"
                            className="contact__link"
                            aria-label="Appeler Léa Lemoine au 06 42 94 00 94"
                        >
                            <span className="contact__label">Par téléphone</span>
                            <span className="contact__value">
                                06 42 94 00 94
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;