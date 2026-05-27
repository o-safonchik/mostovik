import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar1";
import Hero from "@/components/Hero";
import MainPage from "@/components/MainPage";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectsMapYandex from "@/components/ProjectsMapYandex";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
       
        <MainPage />
      </main>
      <Footer />
    </>
  );
}
