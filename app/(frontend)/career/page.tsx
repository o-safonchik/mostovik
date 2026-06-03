import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import CareerHero from "@/components/career/CareerHero"
import CareerIntro from "@/components/career/CareerIntro"
import CareerBenefits from "@/components/career/CareerBenefits"
import VacanciesGrid from "@/components/career/VacanciesGrid"

import { getPayload } from "payload"
import config from "@payload-config"

export default async function CareerPage() {
  const payload = await getPayload({ config })

  const vacanciesData = await payload.find({
    collection: "vacancy",
    sort: "-createdAt",
    limit: 100,
  })

  const vacancies = vacanciesData.docs.map((item) => ({
    id: item.id,
    slug: item.slug,

    title: item.title,

    employment: item.employment,

    salary: item.salary
      ? `От ${item.salary.toLocaleString("ru-RU")} ₽ в месяц`
      : "Зарплата обсуждается",

    experience: item.experience
      ? `Опыт ${item.experience}`
      : "Опыт не требуется",
  }))

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] overflow-hidden">
      
      {/* HERO */}
      <section className="relative border-b-2 border-[#1C52D8] bg-[#F5F7FA] pt-15">
        <Navbar />

        <div className="mx-auto max-w-[1440px] px-6 xl:px-0 pt-[90px] pb-[90px]">
          <CareerHero />
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-1">
        <CareerIntro />

        <CareerBenefits />

        <VacanciesGrid vacancies={vacancies} />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}