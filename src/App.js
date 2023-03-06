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
          <Route path="/" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="*" element={<h1>404 page not found'</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
