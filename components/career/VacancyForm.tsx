"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type VacancyFormProps = {
  vacancyId: string
}

export default function VacancyForm({ vacancyId }: VacancyFormProps) {
  const [surname, setSurname] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [resume, setResume] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/my-route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vacancyId,
          surname,
          name,
          email,
          phone,
          resume,
          message,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Ошибка при отправке формы")
      }

      setSubmitted(true)
      setSurname("")
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setResume("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Неизвестная ошибка")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-32"
    >
      <h2 className="text-[56px] font-black text-[#1E2E67]">
        Откликнуться на вакансию
      </h2>

      {submitted ? (
        <p className="mt-14 text-[24px] text-[#1E2E67]">
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="
            mt-14
            w-[520px]
            border
            border-[#D9DCE7]
            bg-white
            p-8
          "
        >
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Имя*"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                h-[64px]
                w-full
                border
                border-[#D5D8E4]
                px-5
                text-[18px]
                outline-none
                placeholder:text-[#98A0BF]
                focus:border-[#1E2E67]
              "
            />

            <input
              type="text"
              placeholder="Фамилия*"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="
                h-[64px]
                w-full
                border
                border-[#D5D8E4]
                px-5
                text-[18px]
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                h-[64px]
                w-full
                border
                border-[#D5D8E4]
                px-5
                text-[18px]
                outline-none
              "
            />

            <input
              type="tel"
              placeholder="Телефон*"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                h-[64px]
                w-full
                border
                border-[#D5D8E4]
                px-5
                text-[18px]
                outline-none
              "
            />

            <textarea
              placeholder="Расскажите о себе"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                h-[180px]
                w-full
                resize-none
                border
                border-[#D5D8E4]
                p-5
                text-[18px]
                outline-none
              "
            />

            <div className="flex items-center gap-4 pt-2">
              <p className="text-[14px] text-[#8B92AE]">
                Прикрепите резюме (URL или текст)
              </p>

              <input
                type="text"
                placeholder="Ссылка на резюме"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                className="
                  h-[48px]
                  flex-1
                  border
                  border-[#D5D8E4]
                  px-3
                  text-[14px]
                  outline-none
                "
              />
            </div>

            {error ? (
              <p className="text-[14px] text-red-600">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isLoading}
              className="
                mt-4
                flex
                h-[68px]
                w-[220px]
                items-center
                justify-center
                gap-3
                border
                border-[#4E6EDB]
                text-[15px]
                uppercase
                tracking-[0.16em]
                text-[#1E2E67]
                transition-all
                duration-300
                hover:bg-[#1E2E67]
                hover:text-white
                disabled:opacity-50
              "
            >
              {isLoading ? "Отправка…" : "Отправить →"}
            </button>
          </div>
        </form>
      )}
    </motion.section>
  )
}
