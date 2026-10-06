import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Mentions from "./pages/Mentions";
import NotFound from "./pages/NotFound";

import "./App.scss";


const MainLayout = () => {
  const location = useLocation();

  return (
    <>
        <Header />

        <main>
                <Outlet />
        </main>

         <Footer />
    </>
  ); 
}



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