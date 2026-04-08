import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import BrandStatement from "@/components/sections/BrandStatement";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import FiveShots from "@/components/sections/FiveShots";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const placeholderCategories = [
  {
    category: "Personal Branding",
    coverImage: null,
    items: [
      { id: "1", name: "Brand Shoot — Maya Torres", category: "Personal Branding", imageUrl: null, isCover: true, isFeatured: true, order: 1 },
      { id: "2", name: "Presence Session — Anika Wells", category: "Personal Branding", imageUrl: null, isCover: false, isFeatured: true, order: 2 },
    ],
  },
  {
    category: "Founders & CEOs",
    coverImage: null,
    items: [
      { id: "3", name: "Executive Portraits — James Chen", category: "Founders & CEOs", imageUrl: null, isCover: true, isFeatured: true, order: 1 },
      { id: "4", name: "Founder Story — Priya Kapoor", category: "Founders & CEOs", imageUrl: null, isCover: false, isFeatured: true, order: 2 },
    ],
  },
  {
    category: "Real Estate",
    coverImage: null,
    items: [
      { id: "5", name: "Luxe Property Group", category: "Real Estate", imageUrl: null, isCover: true, isFeatured: true, order: 1 },
      { id: "6", name: "Modern Living Spaces", category: "Real Estate", imageUrl: null, isCover: false, isFeatured: true, order: 2 },
    ],
  },
  {
    category: "Wellness",
    coverImage: null,
    items: [
      { id: "7", name: "Glow Aesthetics Studio", category: "Wellness", imageUrl: null, isCover: true, isFeatured: true, order: 1 },
      { id: "8", name: "Core Balance Pilates", category: "Wellness", imageUrl: null, isCover: false, isFeatured: true, order: 2 },
    ],
  },
  {
    category: "Ongoing Content",
    coverImage: null,
    items: [
      { id: "9", name: "Monthly Content — Core Balance", category: "Ongoing Content", imageUrl: null, isCover: true, isFeatured: true, order: 1 },
      { id: "10", name: "Content Strategy — Serene Skin", category: "Ongoing Content", imageUrl: null, isCover: false, isFeatured: true, order: 2 },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid categories={placeholderCategories} />
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
