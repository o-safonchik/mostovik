import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import { getPayload } from "payload"
import config from "@payload-config"

import { RichText } from "@payloadcms/richtext-lexical/react"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({
  params,
}: PageProps) {
  const { slug } = await params

  const payload = await getPayload({
    config,
  })

  const projectData = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 3,
  })

  const project = projectData.docs[0]

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-[#F5F5F7] text-[#172762]">
      <Navbar />

      {/* HERO */}

      <section className="relative">
        {project.previewImage &&
          typeof project.previewImage === "object" &&
          project.previewImage.url && (
            <Image
              src={project.previewImage.url}
              alt={
                project.previewImage.alt ||
                project.title
              }
              width={1920}
              height={800}
              priority
              unoptimized
              className="h-[650px] w-full object-cover"
            />
          )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-[80px] left-1/2 w-full max-w-[1440px] -translate-x-1/2 px-6 text-white">
          <div className="mb-8 flex items-center gap-3 text-sm">
            <Link href="/">Главная</Link>

            <div className="h-[2px] w-[20px] bg-white" />

            <Link href="/projects">
              Проекты
            </Link>
          </div>

          <h1 className="max-w-5xl text-6xl font-bold leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* ABOUT */}

      <section className="mx-auto max-w-[1440px] px-6 py-24">
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-5xl font-bold py-5">
              О проекте
            </h2>

            <p className="text-xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between border-b pb-5">
              <span className="font-medium">
                Регион
              </span>

              <span>
                {project.locationName || "—"}
              </span>
            </div>

            <div className="flex justify-between border-b pb-5">
              <span className="font-medium">
                Заказчик
              </span>

              <span>
                {project.customer || "—"}
              </span>
            </div>

            <div className="flex justify-between border-b pb-5">
              <span className="font-medium">
                Статус
              </span>

              <span>
                {project.finished
                  ? "Завершён"
                  : "Текущий"}
              </span>
            </div>

            <div className="flex justify-between border-b pb-5">
              <span className="font-medium">
                Годы реализации
              </span>

              <span>
                {project.startYear}
                {project.endYear
                  ? ` — ${project.endYear}`
                  : ""}
              </span>
            </div>

            <div className="flex justify-between gap-10 border-b pb-5">
              <span className="font-medium">
                Тип работ
              </span>

             <div className="text-right">
  {project.workType?.length ? (
    <ul>
      {project.workType.map((item, index) => (
        <li key={index}>
          {item.item}
        </li>
      ))}
    </ul>
  ) : (
    "—"
  )}
</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}

      {project.latitude &&
        project.longitude && (
          <section className="mx-auto max-w-[1440px] px-6 pb-24">
            <div className="overflow-hidden rounded-3xl">
              <iframe
                src={`https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=${project.longitude}%2C${project.latitude}&z=12&pt=${project.longitude},${project.latitude},pm2rdm`}
                width="100%"
                height="500"
                loading="lazy"
                allowFullScreen
                className="h-[500px] w-full border-0"
              />
            </div>
          </section>
        )}

      {/* STAGES */}

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1440px] gap-20 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-10 text-5xl font-bold pb-4">
              Состав работ
            </h2>

            {project.stages && (
              <RichText data={project.stages} className="text-xl leading-relaxed" />
            )}
          </div>

          <div>
            {project.stagesImage &&
              typeof project.stagesImage ===
                "object" &&
              project.stagesImage.url && (
                <Image
                  src={project.stagesImage.url}
                  alt={
                    project.stagesImage.alt ||
                    project.title
                  }
                  width={900}
                  height={900}
                  unoptimized
                  className="rounded-3xl"
                />
              )}
          </div>
        </div>
      </section>

      {/* CHARACTERISTICS */}

      <section className="py-24">
        <div className="mx-auto grid max-w-[1440px] gap-20 px-6 lg:grid-cols-2">
          <div>
            {project.charactImage &&
              typeof project.charactImage ===
                "object" &&
              project.charactImage.url && (
                <Image
                  src={project.charactImage.url}
                  alt={
                    project.charactImage.alt ||
                    project.title
                  }
                  width={900}
                  height={900}
                  unoptimized
                  className="rounded-3xl"
                />
              )}
          </div>

          <div>
            <h2 className="mb-10 text-5xl font-bold pb-4">
              Характеристики
            </h2>

            {project.characteristics && (
              <RichText
                data={project.characteristics}
                className="text-xl leading-relaxed"
              />
            )}
          </div>
        </div>
      </section>

      {/* EXPERT RESULTS */}

      {(project.expertResults?.length ?? 0) > 0 && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <h2 className="mb-12 text-5xl font-bold">
              Результаты экспертиз
            </h2>

            <ul className="space-y-5">
              {project.expertResults?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="border-b pb-5 text-xl"
                  >
                    {item.item}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>
      )}

      

      <Footer />
    </main>
  )
}