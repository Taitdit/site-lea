import { useEffect } from "react";
import "./Mentions.scss";

const Mentions = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    return (
        <main className="mentions-legales">
            <div className="mentions-legales__container">
                <header className="mentions-legales__header">
                    <h1>Mentions légales</h1>
                    <p>
                        Informations légales relatives au site{" "}
                        <strong>Strates Atelier</strong>.
                    </p>
                </header>

                <section>
                    <h2>Édition du site</h2>

                    <p>
                        Le site{" "}
                        <a
                            href="https://strates-atelier.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            strates-atelier.com
                        </a>{" "}
                        est édité à titre personnel par :
                    </p>

                    <address>
                        <strong>Léa Lemoine</strong>
                        <br />
                        E-mail :{" "}
                        <a href="mailto:lea.l@me.com">
                            lea.l@me.com
                        </a>
                        <br />
                        Téléphone :{" "}
                        <a href="tel:+33642940094">
                            06 42 94 00 94
                        </a>
                    </address>
                </section>

                <section>
                    <h2>Hébergement</h2>

                    <p>
                        Le site est hébergé par :
                    </p>

                    <address>
                        <strong>OVH SAS</strong>
                        <br />
                        2 rue Kellermann
                        <br />
                        59100 Roubaix
                        <br />
                        France
                        <br />
                        Téléphone : 1007
                        <br />
                        <a
                            href="https://www.ovhcloud.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.ovhcloud.com
                        </a>
                    </address>
                </section>

                <section>
                    <h2>Propriété intellectuelle</h2>

                    <p>
                        L'ensemble des contenus présents sur le site Strates
                        Atelier, notamment les textes, photographies,
                        illustrations, créations, éléments graphiques et
                        visuels, est protégé par la législation applicable
                        en matière de propriété intellectuelle.
                    </p>

                    <p>
                        Sauf mention contraire, ces contenus sont la propriété
                        de Léa Lemoine. Toute reproduction, représentation,
                        modification, publication ou adaptation, totale ou
                        partielle, de ces éléments est interdite sans
                        autorisation préalable.
                    </p>
                </section>

                <section>
                    <h2>Données personnelles</h2>

                    <p>
                        Les données personnelles éventuellement transmises
                        lors d'une prise de contact avec Strates Atelier sont
                        utilisées uniquement afin de répondre à la demande
                        concernée.
                    </p>

                    <p>
                        Elles ne sont ni vendues ni cédées à des tiers à des
                        fins commerciales.
                    </p>

                    <p>
                        Conformément à la réglementation applicable en matière
                        de protection des données personnelles, vous pouvez
                        demander l'accès, la rectification ou la suppression
                        de vos données en contactant :
                    </p>

                    <p>
                        <a href="mailto:lea.l@me.com">
                            lea.l@me.com
                        </a>
                    </p>
                </section>

                <section>
                    <h2>Cookies</h2>

                    <p>
                        Le site Strates Atelier n'utilise pas de cookies
                        nécessitant le recueil préalable du consentement de
                        l'utilisateur.
                    </p>

                    <p>
                        Cette mention pourra être mise à jour si des services
                        supplémentaires utilisant des cookies ou autres
                        traceurs sont ajoutés au site.
                    </p>
                </section>

                <section>
                    <h2>Responsabilité</h2>

                    <p>
                        Les informations présentes sur ce site sont fournies
                        à titre informatif. Malgré le soin apporté à leur
                        publication, Strates Atelier ne peut garantir
                        l'exactitude ou l'exhaustivité permanente des
                        informations diffusées.
                    </p>

                    <p>
                        Le site peut également contenir des liens vers des
                        sites externes. Strates Atelier ne peut être tenu
                        responsable du contenu ou du fonctionnement de ces
                        sites tiers.
                    </p>
                </section>

                <p className="mentions-legales__update">
                    Dernière mise à jour : octobre 2026
                </p>
            </div>
        </main>
    );
};

export default Mentions;