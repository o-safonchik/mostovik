import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getProject(slug: string) {
  const res = await fetch(
    `http://localhost:3000/api/projects?where[slug][equals]=${slug}&depth=2`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Ошибка загрузки проекта");
  }

  const data = await res.json();

  return data.docs[0];
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = await getProject(slug);

  return (
    <div className="w-full bg-[#f5f5f5] overflow-hidden flex flex-col">
      <div className="bg-[#172762]">
        <Navbar />

        <section className="relative w-full">
          <Image
            src={project.previewImage.url}
            alt={project.previewImage.alt}
            width={1920}
            height={700}
            className="w-full h-[570px] object-cover"
            priority
            unoptimized
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute left-[120px] bottom-[80px] z-10 max-w-5xl text-white">
            <div className="flex items-center gap-3 text-sm md:text-base mb-6 flex-wrap">
              <span>Главная</span>
              <span className="w-5 h-[2px] bg-white" />
              <span>Проекты</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              {project.title}
            </h1>
          </div>
        </section>
      </div>

      <section className="max-w-[1440px] mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6 text-[#172762]">
            <div className="border-b border-gray-300 pb-4 flex justify-between gap-6">
              <span className="text-xl font-medium">Регион</span>
              <span className="text-xl">{project.locationName}</span>
            </div>

            <div className="border-b border-gray-300 pb-4 flex justify-between gap-6">
              <span className="text-xl font-medium">Вид работ</span>

              <span className="text-xl">
                {project.workType
                  ?.map((item: any) => item.item)
                  .join(", ")}
              </span>
            </div>

            <div className="border-b border-gray-300 pb-4 flex justify-between gap-6">
              <span className="text-xl font-medium">Заказчик</span>
              <span className="text-xl">{project.customer}</span>
            </div>

            <div className="border-b border-gray-300 pb-4 flex justify-between gap-6">
              <span className="text-xl font-medium">Координаты</span>

              <span className="text-xl">
                {project.latitude}, {project.longitude}
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
           <div className="w-full h-full object-cover">
            
                <iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=34.060342%2C44.451696&z=16" 
                width="560" 
                height="400"
                className="position:relative;"></iframe></div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-[#172762] mb-6">
              Описание
            </h2>

            <p className="text-lg leading-8 text-[#081635]">
              {project.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src={project.charactImage.url}
              alt={project.charactImage.alt}
              width={900}
              height={900}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={project.stagesImage.url}
                alt={project.stagesImage.alt}
                width={900}
                height={700}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-[#172762] mb-8">
                Состав работ
              </h2>

              <p className="text-lg leading-8 text-[#081635]">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}