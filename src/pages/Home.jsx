// src/pages/Home.jsx
import HowItWorks from "../components/HowitWorks";
import Hero from "../components/hero";
import ExpertiseSection from "../components/ExpertiseSection";
import WhyAyurvedaSection from "../components/whyayurveda";
import AyurvedaScroll from "../components/AyrvedaScrool";
import Testimonials from "../components/testimonials";
import DiseaseCarousel from "../components/DiseaseCarousel";
import Diseases from "../components/Diseases";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      
     <Hero/>
     <ExpertiseSection/>
      <WhyAyurvedaSection/>
      <AyurvedaScroll/>
      <Testimonials/>
      <DiseaseCarousel/>
      <Diseases/>
      <Footer/>
    </>
  );
}
