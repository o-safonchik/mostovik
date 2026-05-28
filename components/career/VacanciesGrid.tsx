import VacancyCard from "./VacancyCard"
import Link from "next/link"

interface Vacancy {
  id: number;
  slug: string;
  title: string;
  employment: string;
  salary: string;
  experience: string;
}

interface VacanciesGridProps {
  vacancies: Vacancy[]
}

export default function VacanciesGrid({
  vacancies,
}: VacanciesGridProps) {
  return (
    <section className="pb-[140px]">
      <div className="mx-auto max-w-[1440px] px-6 xl:px-0">
        <div className="flex flex-col gap-[70px]">
          <h2 className="text-[48px] font-bold text-[#172762]">
            Открытые вакансии
          </h2>

          <div className="grid grid-cols-1 grid-cols-1 gap-8">
            {vacancies.map((vacancy, index) => (
              <Link href={`/career/vacancy/${vacancy.slug}`}>   
              <VacancyCard
                key={index}
                title={vacancy.title}
                employment={vacancy.employment}
                salary={vacancy.salary}
                experience={vacancy.experience}
              />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}