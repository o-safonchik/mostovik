import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar1";
import CostCalculator from "@/components/mainpage/CostCalculator";
import Hero from "@/components/mainpage/Hero";
import MainPage from "@/components/mainpage/MainPage";
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
        <MainPage />
      </main>
      <Footer />
    </>
  );
}
