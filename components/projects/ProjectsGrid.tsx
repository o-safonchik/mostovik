import { getPayload } from "payload"
import ProjectCard from "./ProjectCard"
import config from "@payload-config"
import Link from "next/link"

interface Props {
  page?: string
  status?: string
  year?: string
  region?: string
  worktype?: string
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

export default async function ProjectsGrid({ 
  page,
  status,
  year,
  region,
  worktype
}: Props) {
    const payload = await getPayload({ config })
  
    const currentPage = Number(page) || 1

    const where: any = {}
    if (status === "finished") {
    where.finished = {
      equals: true,
      }
    }

    if (status === "current") {
      where.finished = {
        equals: false,
      }
    }
    if (year) {
      where.startYear = {
        equals: Number(year),
      }
    }
    if (region) {
      where.locationName = {
        equals: region,
      }
    }
    if (worktype) {
  where["workType.item"] = {
    equals: worktype,
  };
}

    const projectsData = await payload.find({
      collection: "projects",
      where,
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      depth: 2,
    })

    
  const pagination = getPagination(currentPage, projectsData.totalPages)
  return (
    <section className="pb-[140px]">
      <div className="mx-auto max-w-[1400px] px-12">
        {projectsData.docs.length === 0 ? (
          <div className="py-20 text-center text-xl">
            Проекты не найдены
          </div>
        ) : (
          <>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {projectsData.docs.map((item) => (
            <div key={item.id}>
            <ProjectCard
              slug={item.slug ?? ""}
              title={item.title ?? ""}
              locationName={item.locationName ?? ""}
              previewImage={
                item.previewImage &&
                typeof item.previewImage === "object"
                  ? {
                      url: item.previewImage.url ?? "",
                      alt: item.previewImage.alt ?? "",
                    }
                  : undefined
              }
            />
            </div>
          ))}
        </div>

        {projectsData.totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-3 ">
          {/* PREV */}
          {currentPage > 1 && (
            <Link
              href={`/projects?page=${currentPage - 1}`}
              className="rounded-full border px-5 py-3 transition hover:bg-gray-500 hover:text-white"
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
            )}
            return (
              <Link
                key={page}
                href={`/projects?page=${page}`}
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                currentPage === page
                ? "hover:bg-gray-500 text-white"
                : "hover:bg-gray-500 hover:text-white"
                }`}
              >
                {page}
              </Link>
            )})}

            {/* NEXT */}
            {currentPage < projectsData.totalPages && (
            <Link
              href={`/projects?page=${currentPage + 1}`}
              className="rounded-full border px-5 py-3 transition hover:bg-gray-500 hover:text-white"
            >
              Далее
            </Link>
                )}
          </div>
        )}
        </>
        )}
      </div>
    </section>
  )
}