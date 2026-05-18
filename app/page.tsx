
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar1";
import Hero from "@/components/Hero";
import MainPage from "@/components/MainPage";

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
