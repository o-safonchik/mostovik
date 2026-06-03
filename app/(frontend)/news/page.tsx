import type { NextPage } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import NewsCard from "@/components/news/NewsCard"
import { getPayload } from "payload"
import config from "@payload-config"
import Link from "next/link"

interface Props {
  searchParams: Promise<{
    page?: string
  }>
}

const ITEMS_PER_PAGE = 6

const getPagination = (current: number, total: number) => {
  const pages: (number | "...")[] = []

  const add = (v: number | "...") => pages.push(v)

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  add(1)

  if (start > 2) add("...")

  for (let i = start; i <= end; i++) {
    add(i)
  }

  if (end < total - 1) add("...")

  if (total > 1) add(total)

  return pages
}

const NewsPage: NextPage<Props> = async ({ searchParams }) => {
  const payload = await getPayload({ config })

  const params = await searchParams
  const currentPage = Number(params.page) || 1

  const newsData = await payload.find({
    collection: "news",
    sort: "-publishDate",
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    depth: 2,
  })

  const pagination = getPagination(currentPage, newsData.totalPages)

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
       {/* HERO */}
      <section className="relative border-b-2 border-[#1C52D8] bg-[#F5F7FA] pt-15">
        <Navbar />
      
        <div className="mx-auto max-w-[1440px] px-6 xl:px-0 pt-[90px] pb-[90px]">
          <div className="flex flex-col gap-[35px]">
            <div className="flex items-center gap-[7px] text-sm text-[#1C52D8] font-medium">
             <span><Link href="/">Главная</Link></span>

              <div className="w-[20px] h-[2px] bg-[#1C52D8]" />

              <span>Новости</span>
            </div>

            <h1 className="text-5xl leading-none font-bold tracking-wide text-[#172762]">
              НОВОСТИ
            </h1>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto max-w-7xl px-6 py-20">
        {newsData.docs.length === 0 ? (
          <div className="py-20 text-center text-xl">
            Новости не найдены
          </div>
        ) : (
          <>
            {/* NEWS LIST */}
            <div className="flex flex-col gap-[70px] w-full">
              {newsData.docs.map((item) => (
                <div
                  key={item.id}
                  className="transition-all duration-500 hover:-translate-y-2"
                >
                  <NewsCard
                    slug={item.slug}
                    title={item.title}
                    publishDate={item.publishDate}
                    previewImage={
                      item.previewImage && typeof item.previewImage === "object"
                        ? {
                            url: item.previewImage.url,
                            alt: item.previewImage.alt,
                          }
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            {newsData.totalPages > 1 && (
              <div className="mt-20 flex items-center justify-center gap-3">
                {/* PREV */}
                {currentPage > 1 && (
                  <Link
                    href={`/news?page=${currentPage - 1}`}
                    className="rounded-full border px-5 py-3 transition hover:bg-black hover:text-white"
                  >
                    Назад
                  </Link>
                )}

                {/* NUMBERS */}
                {pagination.map((page, i) => {
                  if (page === "...") {
                    return (
                      <span key={`dots-${i}`} className="px-3 text-gray-400">
                        ...
                      </span>
                    )
                  }

                  return (
                    <Link
                      key={page}
                      href={`/news?page=${page}`}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                        currentPage === page
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      {page}
                    </Link>
                  )
                })}

                {/* NEXT */}
                {currentPage < newsData.totalPages && (
                  <Link
                    href={`/news?page=${currentPage + 1}`}
                    className="rounded-full border px-5 py-3 transition hover:bg-black hover:text-white"
                  >
                    Далее
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default NewsPage