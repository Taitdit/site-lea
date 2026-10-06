import "./About.scss"

const About = () => {
    return (
        <section id="a-propos" className="section sectionHP section__about">
            <div className="section__container">

                <h2 className="section__title">
                    À propos de Strate
                </h2>
                <div className="about">
                    <div className="about__img">
                        <img
                            className="tohide"
                            src="/img/precision-metallurgique-en-atelier.webp"
                            alt="Travail de précision du métal dans l'atelier Strates"
                            loading="lazy"
                            decoding="async"
                        />

                        <img
                            className="toshow"
                            src="/img/precision-metallurgique-en-atelier_M.webp"
                            alt="Travail de précision du métal dans l'atelier Strates"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="about__container">
                        <p><em>&laquo; Une strate se forme lentement. Couche après couche, jusqu'à faire matière. &raquo;</em></p>
                        <h3>D'abord le métal.</h3>
                        <p>Une entrée dans l'atelier d'Erwan Boulloud sans savoir tenir une disqueuse, avec pour seul bagage l'envie d'apprendre. Le laiton, l'inox, l'acier, le geste précis, la finition : tout s'apprend là, à la main. Huit années, dont deux à la tête de l'atelier.</p>
                        <div className="tohide">
                        <h3>La seconde est minérale. La pierre, la chaux, la terre, transmises par un Compagnon tailleur de pierre.</h3>

                        <p><b>STRATES</b> réunit aujourd'hui ces savoir-faire entre les mains d'une même artisane.<br/>
                        Mobilier et pièces sur mesure, en métal seul ou associé à la matière minérale, fabriqués en collaboration avec designers, architectes et artisans.</p>
                        </div>
                    </div>
                    <div className="about__fullWidth">
                        <h3>La seconde est minérale. La pierre, la chaux, la terre, transmises par un Compagnon tailleur de pierre.</h3>

                        <p><b>STRATES</b> réunit aujourd'hui ces savoir-faire entre les mains d'une même artisane.<br/>
                        Mobilier et pièces sur mesure, en métal seul ou associé à la matière minérale, fabriqués en collaboration avec designers, architectes et artisans.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About