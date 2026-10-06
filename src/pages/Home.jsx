import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();

useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
        scroller.scrollTo(sectionId, {
            smooth: true,
            offset: -100,
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
            <Hero />            
            <Gallery />
            <About />
            <Contact />
        </>
    )
}

export default Home