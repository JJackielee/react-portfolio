import {BrowserRouter, Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/contact"
import About from "./pages/about"
import Portfolio from "./pages/portfolio";
import Footer from "./components/Footer";
import Resume from "./pages/resume"

function App() {

  //using react-router-dom we are able to display our pages element in a specific path of our website
  //every page includes a NAV/header and a Footer
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/react-portfolio" element={<About/>}/>
          <Route path="/react-portfolio/portfolio" element={<Portfolio/>}/>
          <Route path="/react-portfolio/contact" element={<Contact/>}/>
          <Route path="/react-portfolio/resume" element={<Resume/>}/>
          <Route path="/react-portfolio/*" element={<h1>404 page not found'</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
