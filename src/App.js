import {BrowserRouter, Routes,Route} from "react-router-dom";
import Nav from "./components/Nav";
import Contact from "./pages/contact"
import About from "./pages/about"
import Portfolio from "./pages/portfolio";
import Footer from "./components/Footer";
import Resume from "./pages/resume"

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
