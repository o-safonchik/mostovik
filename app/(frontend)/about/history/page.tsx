import HistoryTimeline from "@/components/history/HistoryTimeline";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7]">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-[#D6D9E5] pt-[140px] pb-[80px]">
          <div className="mx-auto max-w-[1440px] px-12">
            <div className="text-[16px] text-[#7180B2]">
              Главная — О компании — История
            </div>

            <h1 className="mt-8 text-[72px] font-black tracking-[-0.04em] text-[#1E2E67]">
              ИСТОРИЯ
            </h1>

            <p className="mt-10 max-w-[1100px] text-[28px] leading-[1.5] text-[#1E2E67]">
              История компании «Мостовик» началась со студенческого
              конструкторского бюро. Одним из главных преимуществ
              «мостовиков» было постоянное стремление к внедрению новых
              технологий и инновационных решений.
            </p>
          </div>
        </section>

        <HistoryTimeline />
      </main>

      <Footer />
    </div>
  );
}