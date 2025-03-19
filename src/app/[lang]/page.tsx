import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import HeroSection from "../components/banner/HeroSection";
import AboutUs from "../components/sections/AboutUs";
import OurServices from "../components/sections/OurServices";
import OurTechnology from "../components/sections/OurTechnology";
import MiningSimplefied from "../components/sections/MiningSimplefied";
import Faq from "../components/sections/Faq";
import ContactUs from "../components/sections/ContactUs";
import MainNavigation from "../components/main-navigation";
import Footer from "../components/sections/Footer";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <>
      <MainNavigation dictionary={dictionary.navigation} lang={lang} />
      <main>
        <HeroSection dictionary={dictionary["hero-section"]} />
        <AboutUs dictionary={dictionary["about"]} />
        <OurTechnology dictionary={dictionary.technology} />
        <OurServices dictionary={dictionary.service} />
        <MiningSimplefied dictionary={dictionary.service} />
        <Faq dictionary={dictionary.faq} />
        <ContactUs dictionary={dictionary.contact} />
      </main>
      <Footer dictionary={dictionary.footer} />
    </>
  );
}
