interface VacancyCardProps {
  title: string
  employment: string
  salary: string
  experience: string
}

export default function VacancyCard({
  title,
  employment,
  salary,
  experience,
}: VacancyCardProps) {
  return (
    <article className="group border border-[#DCE2EE] bg-white p-10 hover:border-[#1C52D8] transition-all duration-500 hover:-translate-y-2">
      <div className="flex flex-col gap-8">
        <h3 className="text-[32px] leading-[130%] font-semibold text-[#172762] group-hover:text-[#1C52D8] transition-colors duration-300">
          {title}
        </h3>

        <div className="flex flex-col gap-4 text-[20px]">
          <div className="text-[#5D6785]">{employment}</div>
          <div className="font-medium">{salary}</div>
          <div className="text-[#5D6785]">{experience}</div>
        </div>
      </div>
    </article>
  )
}