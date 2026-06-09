import AboutTeam from "@/components/about/AboutTeam";
import AboutWork from "@/components/about/AboutWork";
import Sertification from "@/components/about/Sertification";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function About () {
  return (
    <main>
      {/* HERO */}
      <section className="relative border-b-2 border-[#1C52D8] bg-[#F5F7FA] pt-15">
        <Navbar />
        <div className="mx-auto max-w-[1440px] px-6 xl:px-0 pt-[90px] pb-[90px]">
          <div className="flex flex-col gap-[35px]">
            <div className="flex items-center gap-[7px] text-sm text-[#1C52D8] font-medium">
              <span><Link href="/">Главная</Link></span>
              <div className="w-[20px] h-[2px] bg-[#1C52D8]" />
              <span>О компании</span>
            </div>
            <h1 className="text-5xl leading-none font-bold tracking-wide text-[#172762]">
              О КОМПАНИИ
            </h1>
          </div>
        </div>
      </section>
      <AboutWork />
      <AboutTeam />
      <Sertification />
      <Footer />
    </main>
  );
}