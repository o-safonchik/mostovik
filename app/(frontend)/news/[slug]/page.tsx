import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import { notFound } from "next/navigation"
import RichText from "@/components/news/RichText"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function NewsSinglePage({ 
  params 
}: Props) {
  const payload = await getPayload({ config })

  const { slug } = await params

  const news = await payload.find({
    collection: "news",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 2,
  })

  const article = news.docs[0]

  if (!article) {
    return notFound()
  }

  const project =
    typeof article.project === "object"
      ? article.project
      : null

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#141b75] text-white pt-40">
        <Navbar />

        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <Link href="/">Главная</Link>

            <div className="h-px w-10 bg-white/30" />

            <Link href="/news">Новости</Link>

            <div className="h-px w-10 bg-white/30" />

            <span>Новость</span>
          </div>

          <h1 className="mt-10 text-4xl font-bold leading-tight md:text-5xl">
            {article.title}
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="rounded-lg bg-white/10 px-5 py-3 text-sm">
              {new Date(article.publishDate).toLocaleDateString(
                "ru-RU",
                {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }
              )}
            </div>

            {project && (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 transition hover:bg-gray-400 "
              >
                Подробнее о проекте
              </Link>
            )}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-20">
        {typeof article.previewImage === "object" &&
          article.previewImage?.url && (
            <div className="relative mb-14 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image
                src={article.previewImage.url}
                alt={
                  article.previewImage.alt || article.title
                }
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}

        <article className="prose prose-lg max-w-none leading-relaxed text-gray-800 text-2xl font-semibold">
          {article.content && (
            <RichText data={article.content} />
          )}
        </article>
      </main>

      <Footer />
    </div>
  )
}