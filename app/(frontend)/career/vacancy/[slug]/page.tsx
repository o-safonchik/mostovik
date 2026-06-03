import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import VacancySidebar from "@/components/career/VacancySidebar"
import VacancyContent from "@/components/career/VacancyContent"
import VacancyForm from "@/components/career/VacancyForm"
import { getPayload } from "payload"
import config from "@payload-config"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function VacancyPage({ params }: Props) {
  
  
  try {
  const payload = await getPayload({ config })

  const { slug } = await params

  const vacancyData = await payload.find({
    collection: "vacancy",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 2,
  })

  const vacancy = vacancyData.docs[0]

  if (!vacancy) {
    return notFound()
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
            <VacancySidebar
              salary={vacancy.salary}
              experience={vacancy.experience}
              employment={vacancy.employment}
            />

            <div>
              <VacancyContent vacancy={vacancy} />
              <VacancyForm vacancyId={vacancy.id} />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  } catch (error) {
    console.error("Error fetching vacancy:", error)
    notFound()
  }
}
