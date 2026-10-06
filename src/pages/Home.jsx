import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();

useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
        scroller.scrollTo(sectionId, {
            smooth: true,
            offset: -70,
            duration: 500,
        });

        navigate("/", {
            replace: true,
            state: {},
        });

        return;
    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
    });
}, [location.state, navigate]);

    return (
        <>

        <Helmet>
            <title>
                Strates Atelier | Métallerie d'art et matière minérale
            </title>

            <meta
                name="description"
                content="Strates Atelier imagine et fabrique du mobilier et des pièces sur mesure en métal et matière minérale, en collaboration avec designers, architectes et artisans."
            />

            <meta
                name="robots"
                content="index, follow"
            />

            <link
                rel="canonical"
                href="https://strates-atelier.com/"
            />

            <meta
                property="og:title"
                content="Strates Atelier | Métallerie d'art et matière minérale"
            />

            <meta
                property="og:description"
                content="Mobilier et pièces sur mesure en métal et matière minérale, fabriqués en collaboration avec designers, architectes et artisans."
            />

            <meta
                property="og:url"
                content="https://strates-atelier.com/"
            />

            <meta
                property="og:image"
                content="https://strates-atelier.com/img/og-strates.webp"
            />
        </Helmet>
            <Hero />            
            <Gallery />
            <About />
            <Contact />
        </>
    )
}

export default Home