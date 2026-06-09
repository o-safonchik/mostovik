interface VacancyContentProps {
  vacancy: any
}

export default function VacancyContent({
  vacancy,
}: VacancyContentProps) {
  return (
    <div className="max-w-[900px] text-[#1E2E67]">
      
      {/* RESPONSIBILITIES */}
      {vacancy.responsibilities?.length > 0 && (
        <div>
          <h2 className="text-[48px] font-black">
            Обязанности:
          </h2>

          <ul className="mt-8 list-disc space-y-3 pl-8 text-[24px] leading-relaxed">
            {vacancy.responsibilities.map(
              (item: any, index: number) => (
                <li key={index}>
                  {item.item}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* REQUIREMENTS */}
      {vacancy.requirements?.length > 0 && (
        <div className="mt-24">
          <h2 className="text-[48px] font-black">
            Требования:
          </h2>

          <ul className="mt-8 list-disc space-y-3 pl-8 text-[24px] leading-relaxed">
            {vacancy.requirements.map(
              (item: any, index: number) => (
                <li key={index}>
                  {item.item}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* SKILLS */}
      {vacancy.skills?.length > 0 && (
        <div className="mt-24">
          <h2 className="text-[48px] font-black">
            Ключевые навыки:
          </h2>

          <ul className="mt-8 list-disc space-y-3 pl-8 text-[24px] leading-relaxed">
            {vacancy.skills.map(
              (item: any, index: number) => (
                <li key={index}>
                  {item.item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  )
}