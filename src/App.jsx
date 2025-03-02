import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection"; 
import SliderSection from "./components/SliderSection";
import SnabbitWorks from "./components/SnabbitWorks";
import WhyChooseSnabbit from "./components/WhyChooseSnabbit";
import CompanyLogos from "./components/CompanyLogos";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <Router>
     
      <HeroSection /> 
      <SliderSection />
      <SnabbitWorks />
      <WhyChooseSnabbit />
      <TestimonialSection />
      <CompanyLogos />
      <FAQSection />
      <Footer />
    </Router>
  );
}

export default App;
