import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar1";
import Hero from "@/components/mainpage/Hero";
import MainPage from "@/components/mainpage/MainPage";
import NewsSection from "@/components/mainpage/NewsSection";
import ProjectsMapYandex from "@/components/mainpage/ProjectsMapYandex";
import ProjectsSection from "@/components/mainpage/ProjectsSection";
import payload from "payload";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsMapYandex />
        <ProjectsSection />
        <NewsSection />
        <MainPage />
      </main>
      <Footer />
    </>
  );
}
