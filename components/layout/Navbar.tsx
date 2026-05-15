"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import clsx from "clsx"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={clsx(
        "fixed left-0 top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-black/10 bg-white/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[90px] max-w-[1400px] items-center justify-between px-12">
        {/* Logo */}
        <div
          className={clsx(
            "text-3xl font-black transition-colors duration-500",
            scrolled ? "text-black" : "text-white"
          )}
        >
          МОСТОВИК
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-14">
          {[
            "Проекты",
            "Новости",
            "Карьера",
            "О компании",
            "Контакты",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={clsx(
                "text-sm font-medium transition-all duration-300 hover:opacity-70",
                scrolled ? "text-black" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}