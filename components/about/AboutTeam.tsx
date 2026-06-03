import Link from "next/link";
import Image from "next/image";

export default function AboutTeam () {
    return (
            <section
      className="self-stretch flex items-start box-border max-w-full text-left text-[40px] text-[#172762] font-[Montserrat] mq450:pb-9 mq450:box-border mq950:pb-14 mq950:box-border"
    >
      <div className="flex-1 bg-gray-100 overflow-hidden flex items-center justify-between py-[78px] px-60 box-border max-w-full gap-0 [row-gap:20px] mq450:gap-0 mq450:pl-5 mq450:pr-5 mq450:box-border mq950:gap-0 mq950:py-[51px] mq950:px-[60px] mq950:box-border mq1400:gap-0 mq1400:pl-[120px] mq1400:pr-[120px] mq1400:box-border">
        <div className="flex-1 flex flex-col items-start justify-center gap-[70px] max-w-[1028px] mq950:gap-[17px] mq1400:gap-[35px] mq1400:max-w-full">
          <h1 className="m-0 self-stretch h-20 relative text-[length:inherit] font-bold font-[inherit] flex items-center shrink-0 mq450:text-2xl mq950:text-[32px]">
            Команда
          </h1>
          <div className="self-stretch h-[261px] relative text-2xl font-[Inter] text-[#081635] flex items-center shrink-0 mq450:text-[19px]">
            Команда ПИК «Мостовик» объединяет лучших высококвалифицированных
            проектировщиков и является интеллектуальным наследником НПО
            «Мостовик», в составе которого, за более чем 30-летнюю историю,
            запроектировала и построила более 850 объектов различной степени
            сложности и назначения в России и за ее пределами.
          </div>
          <div className="self-stretch flex items-start gap-[70px] mq450:gap-[35px] mq950:flex-wrap">
            <Link href={`/career`} className="border-[#1c52d8] border-solid border-[2px] box-border hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)] hover:shadow-[0_12px_30px_rgba(28,82,216,0.2)] hover:border-0 transition  group">
              <button className="border-[#1c52d8] border-solid border-[2px] box-border h-[64px] min-w-[220px] px-[28px] flex items-center justify-center gap-[12px] transition  group"> 
                <span className="text-[#1c52d8] text-[16px] font-semibold group-hover:text-white"> 
                  Карьера 
                </span>
                <Image className="w-[16px] h-[16px] group-hover:invert" width={16} height={16} alt="" src="/icons/arrowiconleft.svg" />
              </button>
            </Link>
            <Link href={`/about/history`} className="border-[#1c52d8] border-solid border-[2px] box-border hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)] hover:shadow-[0_12px_30px_rgba(28,82,216,0.2)] hover:border-0 transition  group">
                <button className="border-2 border-[#1c52d8] bg-transparent h-[64px] min-w-[220px] px-[28px] flex items-center justify-center gap-[12px] transition hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)] hover:shadow-[0_12px_30px_rgba(28,82,216,0.2)] group"> 
                    <span className="text-[#1c52d8] text-[16px] font-semibold group-hover:text-white"> 
                        История
                    </span>
                    <Image className="w-[16px] h-[16px] group-hover:invert" width={16} height={16} alt="" src="/icons/arrowiconleft.svg" />
                </button>
          </Link>
          </div>
        </div>
      </div>
    </section>
    )
}