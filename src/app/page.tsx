import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import FiveShots from "@/components/sections/FiveShots";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <Services />
        <Portfolio />
        <FiveShots />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
