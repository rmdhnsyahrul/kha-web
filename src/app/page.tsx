import Banner from "./components/banner/Banner";
import HeroSection from "./components/banner/HeroSection";
import AboutUs from "./components/sections/AboutUs";
import ContactUs from "./components/sections/ContactUs";
import Faq from "./components/sections/Faq";
import MiningSimplefied from "./components/sections/MiningSimplefied";
import OurServices from "./components/sections/OurServices";
import OurTechnology from "./components/sections/OurTechnology";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <OurTechnology />
      <OurServices />
      <MiningSimplefied />
      <Faq />
      <ContactUs />
    </main>
  );
}
