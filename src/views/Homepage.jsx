import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection.jsx";
import About from "../components/About";
import Resume from "../components/Resume";
import Footer from "../components/Footer";


export default function Homepage() {
   return(
      <>
      <HeroSection />
      <About />
      <Resume />
      <Footer />
      </>
   );
}