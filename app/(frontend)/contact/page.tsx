import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#F5F5F7] text-[#1C2E6A]">
          <section className="relative border-b-2 border-[#1C52D8] bg-[#F5F7FA] pt-15">
                  <Navbar />
                
                  <div className="mx-auto max-w-[1440px] px-6 xl:px-0 pt-[90px] pb-[90px]">
                    <div className="flex flex-col gap-[35px]">
                      <div className="flex items-center gap-[7px] text-sm text-[#1C52D8] font-medium">
                        <span><Link href="/">Главная</Link></span>
          
                        <div className="w-[20px] h-[2px] bg-[#1C52D8]" />
          
                        <span>Контакты</span>
                      </div>
          
                      <h1 className="text-5xl leading-none font-bold tracking-wide text-[#172762]">
                        КОНТАКТЫ
                      </h1>
          
                    </div>
                  </div>
                </section>
      <div className="w-[1352px] max-w-full flex items-center justify-between flex-wrap content-center gap-0 leading-[normal] tracking-[normal] [row-gap:20px] px-16 py-20 mx-auto">
      <section className="flex-1 flex flex-col items-center gap-6 min-w-[370px] max-w-[468px] text-left text-[32px] text-[#172762] font-[Montserrat] mq750:max-w-full mq450:max-w-full">
        <div className="self-stretch flex flex-col items-start gap-[27px]">
          <h2 className="m-0 self-stretch h-[52px] relative text-[length:inherit] font-semibold font-[inherit] flex items-center shrink-0 mq750:text-[26px] mq450:text-[19px]">
            Центральный офис:
          </h2>
          <div className="w-[305px] flex flex-col items-start text-2xl">
            <div className="self-stretch h-[62px] relative font-semibold flex items-center shrink-0 mq450:text-[19px]">
              +7 (3812) 67-60-11
            </div>
            <a
              className="self-stretch h-[62px] relative [text-decoration:underline] font-semibold text-[inherit] flex items-center shrink-0 mq450:text-[19px]"
              href="mailto:office@pik-mostovik.ru"
              target="_blank"
            >
              office@pik-mostovik.ru
            </a>
          </div>
        </div>
        <div className="self-stretch h-[504px] border-[#1c52d8] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start py-7 px-[29px] gap-[22px] mq450:pt-5 mq450:pb-5 mq450:box-border">
          <h2 className="m-0 self-stretch relative text-[length:inherit] font-semibold font-[inherit] mq750:text-[26px] mq450:text-[19px]">
            Реквизиты
          </h2>
          <div className="self-stretch flex flex-col items-start text-2xl text-[#081635]">
            <div className="self-stretch h-[62px] relative font-medium flex items-center shrink-0 mq450:text-[19px]">
              ИНН 5501277891
            </div>
            <div className="self-stretch h-[62px] relative font-medium flex items-center shrink-0 mq450:text-[19px]">
              КПП 550101001
            </div>
            <div className="self-stretch h-[62px] relative font-medium flex items-center shrink-0 mq450:text-[19px]">
              ОГРН 1225500007171
            </div>
            <div className="self-stretch h-[62px] relative font-medium flex items-center shrink-0 mq450:text-[19px]">
              р/с 40702810745000001102
            </div>
            <div className="self-stretch h-[62px] relative font-medium flex items-center shrink-0 mq450:text-[19px]">
              к/с 30101810900000000673
            </div>
            <div className="self-stretch h-[62px] relative tracking-[-0.01px] font-medium flex items-center shrink-0 mq450:text-[19px]">
              Омское отделение № 8634
              <br />
              ПАО СБЕРБАНК, БИК 045209673
            </div>
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col items-start gap-[79px] min-w-[370px] max-w-[612px] text-left text-4xl text-[#172762] font-[Montserrat] mq750:max-w-full mq450:gap-5 mq450:gap-[39px] mq450:max-w-full">
        <div className="w-full flex flex-col items-start gap-[13px] max-w-[316px]">
          <h1 className="m-0 self-stretch h-[52px] relative text-[length:inherit] font-semibold font-[inherit] flex items-center shrink-0 mq750:text-[29px] mq450:text-[22px]">
            ОМСК
          </h1>
          <div className="self-stretch h-[83px] relative text-2xl font-semibold flex items-center shrink-0 mq450:text-[19px]">
            644050, проспект Мира, дом 5, корп. 5
          </div>
        </div>
        <div className="position:relative;overflow:hidden;">
          
            <iframe src="https://yandex.ru/map-widget/v1/?ll=73.299958%2C55.019439&z=16&pt=73.299958,55.019439,pm2rdm" 
            width="560" 
            height="400" 
            className="position:relative;">
        </iframe></div>
      </section>
    </div>
      <Footer />
    </main>
  );
}