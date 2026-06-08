import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavbarMainPage";
import CostCalculator from "@/components/mainpage/CostCalculator";
import Hero from "@/components/mainpage/Hero";
import LegacySection from "@/components/mainpage/LegacySection";
import NewsSection from "@/components/mainpage/NewsSection";
import ProjectsMapYandex from "@/components/mainpage/ProjectsMapYandex";
import ProjectsSection from "@/components/mainpage/ProjectsSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsMapYandex />
        <ProjectsSection />
        <NewsSection />
        <CostCalculator />
        <LegacySection />
      </main>
      <Footer />
    </>
  );
}
