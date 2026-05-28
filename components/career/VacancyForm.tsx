"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type VacancyFormProps = {
  vacancyId: string
}

export default function VacancyForm({
  vacancyId,
}: VacancyFormProps) {
  const [surname, setSurname] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [resume, setResume] = useState<File | null>(null)

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()

      formData.append("vacancyId", vacancyId)
      formData.append("firstName", name)
      formData.append("lastName", surname)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("about", message)

      if (resume) {
        formData.append("resume", resume)
      }

      const response = await fetch(
        "/api/applications",
        {
          method: "POST",
          body: formData,
        }
      )

      if (!response.ok) {
        const data = await response.json()

        throw new Error(
          data.error || "Ошибка при отправке формы"
        )
      }

      setSubmitted(true)

      setSurname("")
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setResume(null)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Неизвестная ошибка"
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.section
      id="vacancy-form"
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
          Заявка отправлена. Мы свяжемся с вами
          в ближайшее время.
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
            {/* NAME */}
            <input
              type="text"
              placeholder="Имя*"
              required
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="
                h-[64px]
                w-full
                border
                border-[#D5D8E4]
                px-5
                text-[18px]
                outline-none
                transition-colors
                placeholder:text-[#98A0BF]
                focus:border-[#1E2E67]
              "
            />

            {/* SURNAME */}
            <input
              type="text"
              placeholder="Фамилия*"
              required
              value={surname}
              onChange={(e) =>
                setSurname(e.target.value)
              }
              className="
                h-[64px]
                w-full
                border
                border-[#D5D8E4]
                px-5
                text-[18px]
                outline-none
                transition-colors
                placeholder:text-[#98A0BF]
                focus:border-[#1E2E67]
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                h-[64px]
                w-full
                border
                border-[#D5D8E4]
                px-5
                text-[18px]
                outline-none
                transition-colors
                placeholder:text-[#98A0BF]
                focus:border-[#1E2E67]
              "
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Телефон*"
              required
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="
                h-[64px]
                w-full
                border
                border-[#D5D8E4]
                px-5
                text-[18px]
                outline-none
                transition-colors
                placeholder:text-[#98A0BF]
                focus:border-[#1E2E67]
              "
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Расскажите о себе"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="
                h-[180px]
                w-full
                resize-none
                border
                border-[#D5D8E4]
                p-5
                text-[18px]
                outline-none
                transition-colors
                placeholder:text-[#98A0BF]
                focus:border-[#1E2E67]
              "
            />

            {/* RESUME */}
            <div className="pt-2">
              <p className="mb-3 text-[14px] text-[#8B92AE]">
                Прикрепите резюме (PDF, DOC, DOCX,
                максимум 5 МБ)
              </p>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file =
                    e.target.files?.[0] || null

                  if (
                    file &&
                    file.size > 5 * 1024 * 1024
                  ) {
                    setError(
                      "Размер файла не должен превышать 5 МБ"
                    )

                    return
                  }

                  setError(null)
                  setResume(file)
                }}
                className="
                  flex
                  h-[54px]
                  w-full
                  cursor-pointer
                  items-center
                  border
                  border-[#D5D8E4]
                  px-4
                  text-[14px]
                  text-[#1E2E67]
                  outline-none
                  file:mr-4
                  file:border-0
                  file:bg-[#1E2E67]
                  file:px-4
                  file:py-2
                  file:text-white
                  hover:border-[#1E2E67]
                "
              />
            </div>

            {/* ERROR */}
            {error ? (
              <p className="text-[14px] text-red-600">
                {error}
              </p>
            ) : null}

            {/* BUTTON */}
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
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {isLoading
                ? "Отправка..."
                : "Отправить →"}
            </button>
          </div>
        </form>
      )}
    </motion.section>
  )
}

