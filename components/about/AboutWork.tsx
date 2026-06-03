import Image from "next/image"
import Link from "next/link"

export default function AboutWork() {
    return (
        <section
      className="self-stretch bg-gray-100 overflow-hidden flex items-center justify-center py-0 px-[30px] box-border max-w-full"
    >
      <div className="flex-1 flex items-center justify-between flex-wrap content-center gap-0 max-w-[1440px] [row-gap:20px] mq1875:gap-0 mq1875:max-w-full">
        <section className="flex-1 flex flex-col items-start justify-center gap-[70px] min-w-[310px] max-w-[509px] text-left text-[40px] text-[#172762] font-[Montserrat] mq450:gap-[17px] mq950:gap-[35px] mq950:max-w-full">
          <h1 className="m-0 self-stretch h-20 relative text-[length:inherit] font-bold font-[inherit] flex items-center shrink-0 mq450:text-2xl mq950:text-[32px]">
            Деятельность
          </h1>
          <div className="self-stretch h-52 relative text-2xl font-[Inter] text-[#081635] flex items-center shrink-0 mq450:text-[19px]">
            Главным направлением деятельности ПИК «Мостовик» является проведение
            изыскательских работ, разработка проектов строительства и
            производство строительно-монтажных работ транспортных,
            инфраструктурных, промышленных и специальных объектов.
          </div>
          <div className="self-stretch flex items-start gap-[70px] mq450:gap-[35px] mq950:flex-wrap">
            <Link href={`/projects`} className="border-[#1c52d8] border-solid border-[2px] box-border hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)] hover:shadow-[0_12px_30px_rgba(28,82,216,0.2)] hover:border-0 transition  group">
              <button className="border-[#1c52d8] border-solid border-[2px] box-border h-[64px] min-w-[220px] px-[28px] flex items-center justify-center gap-[12px] transition  group"> 
                <span className="text-[#1c52d8] text-[16px] font-semibold group-hover:text-white"> 
                  Проекты 
                </span>
                <Image className="w-[16px] h-[16px] group-hover:invert" width={16} height={16} alt="" src="/icons/arrowiconleft.svg" />
              </button>
            </Link>
            <Link href={`/about/legacy`} className="border-[#1c52d8] border-solid border-[2px] box-border hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)] hover:shadow-[0_12px_30px_rgba(28,82,216,0.2)] hover:border-0 transition  group">
                <button className="border-2 border-[#1c52d8] bg-transparent h-[64px] min-w-[220px] px-[28px] flex items-center justify-center gap-[12px] transition hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)] hover:shadow-[0_12px_30px_rgba(28,82,216,0.2)] group"> 
                    <span className="text-[#1c52d8] text-[16px] font-semibold group-hover:text-white"> 
                        Наследие
                    </span>
                    <Image className="w-[16px] h-[16px] group-hover:invert" width={16} height={16} alt="" src="/icons/arrowiconleft.svg" />
                </button>
          </Link>
          </div>
        </section>
        <Image
          className="h-[787px] w-[703px] relative object-cover min-w-[310px] max-w-[703px] mq950:max-w-full"
          loading="lazy"
          width={703}
          height={787}
          sizes="100vw"
          alt="Процессс строительства моста"
          src="/about/1.jpg"
        />
      </div>
    </section>
    )
}