import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ProjectsGrid from "@/components/projects/ProjectsGrid"

export default function ProjectsPage() {
  return (
    <main className="bg-[#F5F5F7] text-[#1C2E6A]">
      <Navbar />

      {/* Header */}
      <section className="border-b border-[#D7D9E0] pt-[140px] pb-[40px]">
        <div className="mx-auto max-w-[1400px] px-12">
          {/* Breadcrumbs */}
          <div className="text-[14px] text-[#5060A3]">
            Главная — Проекты
          </div>

          {/* Title */}
          <h1 className="mt-10 text-[64px] font-black uppercase tracking-[-0.03em]">
            Наши проекты
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="mx-auto flex max-w-[1400px] items-center gap-12 px-12">
          <button className="border-b border-[#1C2E6A] pb-1 text-[20px] font-semibold">
            Завершённые проекты
          </button>

          <button className="text-[20px] text-[#4B5A8F]">
            Текущие проекты
          </button>
        </div>
      </section>

      {/* Grid */}
      <ProjectsGrid />

      <Footer />
    </main>
  )
}