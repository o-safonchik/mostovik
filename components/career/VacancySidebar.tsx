"use client"

import { motion } from "framer-motion"

export default function VacancySidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-[140px] h-fit"
    >
      <div className="space-y-8 text-[32px] leading-tight text-[#1E2E67]">
        <p>От 100 000 ₽ в месяц на руки</p>

        <p>Опыт 1-3 года</p>

        <p>Полная занятость</p>
      </div>

      <button
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