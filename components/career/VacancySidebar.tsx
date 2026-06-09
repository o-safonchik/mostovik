"use client"

import { motion } from "framer-motion"

interface VacancySidebarProps {
  salary?: number | null
  experience?: string | null
  employment: string
}

export default function VacancySidebar({
  salary,
  experience,
  employment,
}: VacancySidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-[140px] h-fit"
    >
      <div className="space-y-8 text-[25px] font-bold leading-loose text-[#1E2E67]">
        <p>
          {salary
            ? `От ${salary.toLocaleString("ru-RU")} ₽ в месяц`
            : "Зарплата обсуждается"}
        </p>

        <p>
          {experience
            ? ` ${experience}`
            : "Опыт не требуется"}
        </p>

        <p>{employment}</p>
      </div>

      <button
        onClick={() => {
          document
            .getElementById("vacancy-form")
            ?.scrollIntoView({
              behavior: "smooth",
            })
        }}
        className="
          mt-14
          flex
          h-[64px]
          w-[240px]
          items-center
          justify-center
          gap-3
          border
          border-[#4E6EDB]
          text-[15px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-[#1E2E67]
          transition-all
          duration-300
          hover:bg-[#1E2E67]
          hover:text-white
        "
      >
        Откликнуться →
      </button>
    </motion.aside>
  )
}