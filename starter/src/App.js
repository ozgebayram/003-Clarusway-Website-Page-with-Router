import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import {Routes,Route} from "react-router-dom"
import Html from "./pages/Html"
import Css from "../src/pages/Css"
import Logo from "../src/pages/Logo"
import Card from "./components/card/Card";

function App() {
  return (
    <>
    <Navbar />
    <Routes>    
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/html" element={<Html/>}/>
      <Route path="/css" element={<Css/>}/>
      <Route path="/logo" element={<Logo/>}/>


    </Routes>
      <Footer />
    </>
  );
}

export default App;
