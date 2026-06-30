import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsFilters from "@/components/projects/ProjectFilter";

import Link from "next/link";

import { getPayload } from "payload";
import config from "@payload-config";

interface Props {
  searchParams: Promise<{
    page?: string;
    status?: string;
    year?: string;
    region?: string;
    worktype?: string;
  }>;
}

export default async function ProjectsPage({
  searchParams,
}: Props) {

  const params = await searchParams;

  const payload = await getPayload({
    config,
  });

  const allProjects = await payload.find({
    collection: "projects",
    limit: 1000,
    depth: 0,
  });


  const years = Array.from(
  new Set(
    allProjects.docs
      .map((p) => p.startYear)
      .filter(
        (year): year is number =>
          typeof year === "number"
      )
  )
).sort((a, b) => b - a);


const regions = Array.from(
  new Set(
    allProjects.docs
      .map((p) => p.locationName)
      .filter(
        (region): region is string =>
          typeof region === "string" &&
          region.length > 0
      )
  )
).sort();


const worktypes = Array.from(
  new Set(
    allProjects.docs.flatMap((project) =>
      (project.workType ?? [])
        .map((work) => work.item)
        .filter(
          (item): item is string =>
            typeof item === "string" && item.length > 0
        )
    )
  )
).sort();


  return (
    <main className="bg-[#F5F5F7] text-[#1C2E6A]">

      <section className="relative border-b-2 border-[#1C52D8] bg-[#F5F7FA] pt-15">

        <Navbar />

        <div className="mx-auto max-w-[1440px] px-6 xl:px-0 pt-[90px] pb-[90px]">

          <div className="flex flex-col gap-[35px]">

            <div className="flex items-center gap-[7px] text-sm text-[#1C52D8] font-medium">

              <span>
                <Link href="/">Главная</Link>
              </span>

              <div className="w-[20px] h-[2px] bg-[#1C52D8]" />

              <span>Проекты</span>

            </div>

            <h1 className="text-5xl leading-none font-bold tracking-wide text-[#172762]">
              ПРОЕКТЫ
            </h1>

          </div>

        </div>

      </section>


      <ProjectsFilters
        status={params.status}
        year={params.year}
        region={params.region}
        worktype={params.worktype}

        years={years}
        regions={regions}
        worktypes={worktypes}
      />


      <ProjectsGrid
        page={params.page}
        status={params.status}
        year={params.year}
        region={params.region}
        worktype={params.worktype}
      />


      <Footer />

    </main>
  );
}