"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

const historyData = [
  {
    decade: 1980,
    events: [
      {
        id: "skb",
        year: 1982,
        title: "Кафедра «Мосты и туннели»",
        image: "/history/1982.jpg",
        description:
          "История НПО «Мостовик» началась в 1982 году со студенческого конструкторского бюро (СКБ) «Мостовик», созданного на кафедре «Мосты» Сибирского автомобильно-дорожного института.",
      },

      {
        id: "development",
        year: 1989,
        title: "Развитие предприятия",
        image: "/history/1989.jpg",
        description:
          "К концу 80-х организация начала расширять направления деятельности.",
      },
    ],
  },

  {
    decade: 1990,
    events: [
      {
        id: "omsk-metro",
        year: 1995,
        title: "Омское метро",
        image: "/history/metro.jpg",
        description:
          "Началось участие в масштабных инфраструктурных проектах.",
      },
    ],
  },

  {
    decade: 2000,
    events: [],
  },

  {
    decade: 2010,
    events: [],
  },

  {
    decade: 2020,
    events: [],
  },
]

const tags = [
  {
    label: "Кафедра «Мосты и туннели»",
    eventId: "skb",
  },
  {
    label: "Омское метро",
    eventId: "omsk-metro",
  },
  {
    label: "Мост на остров Русский",
    eventId: "russky",
  },
  {
    label: "Олимпиада 2014",
    eventId: "olympics",
  },
  {
    label: "Космодром Восточный",
    eventId: "vostok",
  },
]

export default function HistoryTimeline() {
  const [selectedDecade, setSelectedDecade] = useState(1980)

  const years = useMemo(
    () =>
      historyData.find(
        (item) => item.decade === selectedDecade
      )?.events || [],
    [selectedDecade]
  )

  const [selectedYear, setSelectedYear] = useState(
    years[0]?.year ?? 1982
  )

  const goToEvent = (eventId: string) => {
  for (const decade of historyData) {
    const event = decade.events.find(
      (e) => e.id === eventId
    )

    if (event) {
      setSelectedDecade(decade.decade)
      setSelectedYear(event.year)

      requestAnimationFrame(() => {
        document
          .getElementById("history-event")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
      })

      break
    }
}}

  const currentEvent =
    years.find((e) => e.year === selectedYear) || years[0]


  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-[1440px] px-12">

        {/* TAGS */}

        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <button
              key={tag.eventId}
              onClick={() => goToEvent(tag.eventId)}
              className="
                border
                border-[#1C52D8]
                px-6
                py-3
                text-[18px]
                text-[#1C52D8]
                transition-all
                hover:bg-[#1C52D8]
                hover:text-white
              "
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* DECADES */}

        <div className="mt-20 flex gap-16 border-b border-[#D9DCE7] pb-6">
          {historyData.map((item) => (
            <button
              key={item.decade}
              onClick={() => {
                setSelectedDecade(item.decade)

                if (item.events.length) {
                  setSelectedYear(item.events[0].year)
                }
              }}
              className={`
                text-[40px]
                font-black
                transition-all

                ${
                  selectedDecade === item.decade
                    ? "text-[#1C52D8]"
                    : "text-[#B4BCD5]"
                }
              `}
            >
              {item.decade}
            </button>
          ))}
        </div>

        {/* YEARS */}

        <div id="history-event" className="mt-12 flex gap-8">
          {years.map((year) => (
            <button
              key={year.year}
              onClick={() => setSelectedYear(year.year)}
              className={`
                text-[28px]
                font-semibold

                ${
                  selectedYear === year.year
                    ? "text-[#1C52D8]"
                    : "text-[#A2A8BF]"
                }
              `}
            >
              {year.year}
            </button>
          ))}
        </div>

        {/* EVENT */}

        {currentEvent && (
          <div className="mt-20 grid grid-cols-[620px_1fr] gap-20">
            <div className="overflow-hidden">
              <Image
                src={currentEvent.image}
                alt={currentEvent.title}
                width={620}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <div className="text-[96px] font-black text-[#1C52D8]">
                {currentEvent.year}
              </div>

              <h2 className="mt-6 text-[42px] font-black text-[#1E2E67]">
                {currentEvent.title}
              </h2>

              <p className="mt-8 text-[24px] leading-[1.7] text-[#1E2E67]">
                {currentEvent.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}