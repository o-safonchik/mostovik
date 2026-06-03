import Link from "next/link"

interface Props {
  status?: string
  year?: string
  region?: string
  worktype?: string
}

export default function ProjectsFilters({
  status,
  year,
  region,
  worktype,
}: Props) {
  const buildUrl = (params: Record<string, string | undefined>) => {
    const search = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        search.set(key, value)
      }
    })

    return `/projects?${search.toString()}`
  }

  return (
    <section className="border-b border-[#D8DCE8] py-8">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-10 px-12">

        {/* Тип проектов */}
        <div className="flex items-center gap-8">
          <Link
            href={buildUrl({
              status: "current",
              year,
              region,
              worktype,
            })}
            className={`pb-1 text-[20px] transition ${
              status === "current" || !status
                ? "border-b border-[#1C2E6A] font-semibold"
                : "text-[#4B5A8F]"
            }`}
          >
             <button className="text-[20px]">
                  Текущие проекты
                </button>
          </Link>

          <Link
            href={buildUrl({
              status: "finished",
              year,
              region,
              worktype,
            })}
            className={`pb-1 text-[20px] transition ${
              status === "finished"
                ? "border-b border-[#1C2E6A] font-semibold"
                : "text-[#4B5A8F]"
            }`}
          >
             <button className="text-[20px]">
                Завершённые проекты
                </button>
          </Link>
        </div>

        {/* Год */}
        <div className="flex items-center gap-3">
          <span className="text-[16px] text-[#4B5A8F]">
            Год:
          </span>

          {[2025, 2024, 2023, 2022].map((item) => (
            <Link
              key={item}
              href={buildUrl({
                status,
                year: String(item),
                region,
                worktype,
              })}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                year === String(item)
                  ? "bg-[#1C2E6A] text-white"
                  : "hover:bg-[#1C2E6A] hover:text-white"
              }`}
            >
              {String(item)}
            </Link>
          ))}
        </div>

        {/* Регион */}
        <div className="flex items-center gap-3">
          <span className="text-[16px] text-[#4B5A8F]">
            Регион:
          </span>

          {["Москва", "Омск", "Тюмень"].map((regionItem) => (
            <Link
              key={regionItem}
              href={buildUrl({
                status,
                year,
                region: regionItem,
                worktype,
              })}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                region === regionItem
                  ? "bg-[#1C2E6A] text-white"
                  : "hover:bg-[#1C2E6A] hover:text-white"
              }`}
            >
              {regionItem}
            </Link>
          ))}
        </div>

        {/* Тип работ */}
        <div className="flex items-center gap-3">
          <span className="text-[16px] text-[#4B5A8F]">
            Тип работ:
          </span>

          {[
            "Проектирование",
            "Экспертиза",
            "Обследование",
          ].map((type) => (
            <Link
              key={type}
              href={buildUrl({
                status,
                year,
                region,
                worktype: type,
              })}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                worktype === type
                  ? "bg-[#1C2E6A] text-white"
                  : "hover:bg-[#1C2E6A] hover:text-white"
              }`}
            >
              {type}
            </Link>
          ))}
        </div>

        {/* Сброс */}
        <Link
          href="/projects"
          className="ml-auto text-sm text-[#1C52D8] underline"
        >
          Сбросить фильтры
        </Link>
      </div>
    </section>
  )
}