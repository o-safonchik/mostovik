export default function VacancyContent() {
  return (
    <div className="max-w-[900px] text-[#1E2E67]">
      {/* Section */}
      <div>
        <h2 className="text-[48px] font-black">
          Обязанности:
        </h2>

        <ul className="mt-8 list-disc space-y-3 pl-8 text-[24px] leading-relaxed">
          <li>
            Архитектурное проектирование жилых,
            общественных и производственных зданий
          </li>

          <li>
            Разработка, оформление и выпуск документации
          </li>

          <li>
            Разработка концепций и выпуск эскизных проектов
          </li>

          <li>
            Работа со смежными специалистами
          </li>

          <li>
            Работа с нормативными документами
          </li>
        </ul>
      </div>

      {/* Section */}
      <div className="mt-24">
        <h2 className="text-[48px] font-black">
          Требования:
        </h2>

        <ul className="mt-8 list-disc space-y-3 pl-8 text-[24px] leading-relaxed">
          <li>Высшее образование</li>

          <li>Знание AutoCAD, Excel, Word</li>

          <li>Умение работать в команде</li>

          <li>Стрессоустойчивость</li>

          <li>Исполнительность</li>
        </ul>
      </div>

      {/* Section */}
      <div className="mt-24">
        <h2 className="text-[48px] font-black">
          Ключевые навыки:
        </h2>

        <ul className="mt-8 list-disc space-y-3 pl-8 text-[24px] leading-relaxed">
          <li>Autodesk Revit</li>
          <li>3D Max</li>
          <li>Sketch Up</li>
          <li>Adobe Photoshop</li>
          <li>MS Excel</li>
          <li>MS Word</li>
        </ul>
      </div>
    </div>
  )
}