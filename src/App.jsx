import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Mentions from "./pages/Mentions";
import NotFound from "./pages/NotFound";

import "./App.scss";


const MainLayout = () => {
    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
            >
                Aller au contenu principal
            </a>

            <Header />

            <main
                id="main-content"
                tabIndex="-1"
            >
                <Outlet />
            </main>

            <Footer />
        </>
    );
};


const App = () => {

  return (
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/mentions-legales" element={<Mentions />} />
              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>
        </BrowserRouter>
  )
}

export default App