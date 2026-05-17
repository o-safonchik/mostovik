import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import VacancySidebar from "@/components/career/VacancySidebar"
import VacancyContent from "@/components/career/VacancyContent"
import VacancyForm from "@/components/career/VacancyForm"
import { createTRPCServer } from "@/lib/trpc/server"

type VacancyPageProps = {
  params: Promise<{ id: string }>
}

export default async function VacancyPage({ params }: VacancyPageProps) {
  const { id } = await params
  const api = await createTRPCServer()
  const vacancy = await api.vacancy.getById({ id })

  if (!vacancy) {
    notFound()
  }

  return (
    <main className="bg-[#F5F5F7] text-[#1E2E67]">
      <Navbar />

      <section className="border-b border-[#CDD1DE] pt-[140px] pb-[52px]">
        <div className="mx-auto max-w-[1400px] px-12">
          <div className="text-[16px] text-[#51609C]">
            Главная — Карьера — Вакансия
          </div>

          <h1 className="mt-10 text-[64px] font-black tracking-[-0.03em]">
            {vacancy.title}
          </h1>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[280px_1fr] gap-[120px] px-12">
          <VacancySidebar />

          <div>
            <VacancyContent />
            <VacancyForm vacancyId={vacancy.id} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
