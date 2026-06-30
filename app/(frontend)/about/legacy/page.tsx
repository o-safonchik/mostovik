import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function LegacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F7FA] overflow-hidden">
      <section className="relative border-b-2 border-[#1C52D8] bg-[#F5F7FA] pt-15">
        <Navbar />
        <div className="mx-auto max-w-[1440px] px-6 xl:px-0 pt-[90px] pb-[90px]">
          <div className="flex flex-col gap-[35px]">
            <div className="flex items-center gap-[7px] text-sm text-[#1C52D8] font-medium">
              <span><Link href="/">Главная</Link></span>
              <div className="w-[20px] h-[2px] bg-[#1C52D8]" />
              <span><Link href="/about">О компании</Link></span>
              <div className="w-[20px] h-[2px] bg-[#1C52D8]" />
              <span>Наследие</span>
            </div>
                <h1 className="text-5xl leading-none font-bold tracking-wide text-[#172762]">
                  НАСЛЕДИЕ
                </h1>
                <p className="max-w-[980px] text-[28px] leading-[140%] text-[#172762] font-medium">
                  Некоторые наиболее крупные и уникальные объекты созданные нашими специалистами во время работы в НПО «Мостовик»
                </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}