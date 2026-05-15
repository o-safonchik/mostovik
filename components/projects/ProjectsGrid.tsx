import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Горный многофункциональный комплекс на горе Ай-Петри",
    location: "Республика Крым",
    image: "/projects/project-1.jpg",
  },
  {
    title: "Многоуровневая наземная открытая автостоянка",
    location: "Ленинградская область",
    image: "/projects/project-2.jpg",
  },
  {
    title: "Реконструкция надземного пешеходного перехода",
    location: "Астана, Казахстан",
    image: "/projects/project-3.jpg",
  },
  {
    title: "Строительство детского сада",
    location: "Омская область",
    image: "/projects/project-4.jpg",
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pb-[140px]">
      <div className="mx-auto max-w-[1400px] px-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex items-center justify-center gap-6 text-[28px] text-[#1C2E6A]">
          <button>←</button>

          <div className="flex gap-4">
            <span className="font-bold">1</span>
            <span className="opacity-50">2</span>
            <span className="opacity-50">3</span>
            <span className="opacity-50">4</span>
          </div>

          <button>→</button>
        </div>
      </div>
    </section>
  )
}