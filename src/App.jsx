import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Gallery />
                <About />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;