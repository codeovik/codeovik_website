import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import TechStack from "./pages/TechStack";
import Certificate from "./pages/Certificate";
import About from "./pages/About";

export default function App() {
  return (
    <div className="selection:text-constant selection:bg-primary max-w-[1600px] mx-auto w-full px-3 lg:px-12 bg-[#050505] text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}