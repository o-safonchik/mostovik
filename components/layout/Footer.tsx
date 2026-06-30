"use client"

import Image from "next/image"

export default function Footer () {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-[#E9ECF3] w-full flex justify-center px-[clamp(20px,12vw,240px)] box-border">
      <section className="w-full max-w-[1440px] min-h-[435px] flex flex-col gap-[59px] pt-12 pb-10 relative">

        {/* CONTENT */}
        <div className="flex items-start gap-[75px] w-full">

          {/* LOGO */}
          <div className="flex items-center justify-center p-2">
            <div className="relative w-[263px] h-[52px]">
              <Image
                src="/largelogotitle.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-start gap-[94px] w-full justify-between">

            {/* LINKS */}
            <div className="flex items-start gap-[75px]">
              <div className="flex flex-col gap-[32px] p-[5px]">

               
                  <div className="cursor-pointer group relative font-semibold hover:text-[#1c52d8]">
                    Политика конфиденциальности
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#1c52d8] transition-all duration-300 group-hover:w-full"></span>
                  </div>
                

                <div className="cursor-pointer group relative font-semibold hover:text-[#1c52d8]">
                  Использование Cookie
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#1c52d8] transition-all duration-300 group-hover:w-full"></span>
                </div>

                <div className="cursor-pointer group relative font-semibold hover:text-[#1c52d8]">
                  Пользовательское соглашение
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#1c52d8] transition-all duration-300 group-hover:w-full"></span>
                </div>

              </div>
            </div>

            {/* CONTACTS */}
            <div className="w-[342px] flex flex-col gap-6 text-[20px]">

              <div className="flex flex-col gap-3 p-1">
                <h3 className="font-medium">office@pik-mostovik.ru</h3>
                <h3 className="font-medium">+7 (3812) 67-60-11</h3>
              </div>

              <div className="flex flex-col gap-[5px] p-1">
                <h3 className="font-medium">+7 (3812) 67-60-12</h3>
                <div className="text-[16px] text-gray-500">Отдел кадров</div>
              </div>

              <div className="p-1 text-gray-600 text-[16px]">
                644050, город Омск, <br />
                проспект Мира, дом 5, корпус 5
              </div>

            </div>
          </div>

          {/* TOP BUTTON */}
          <button
            onClick={scrollToTop}
            className="
              w-[79px] h-[79px]
              border-2 border-[#1c52d8]
              flex items-center justify-center
              bg-transparent
              transition-all duration-300
              hover:bg-[#4971d4]
              hover:scale-105
              active:scale-95
              group
            "
          >
            <Image
              src="/icons/arrowicontop.svg"
              alt=""
              width={20}
              height={20}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>

        </div>

        {/* COPYRIGHT */}
        <div className="absolute bottom-6 left-[68px] text-gray-500 text-[14px]">
          © 2026 ООО ПИК «Мостовик». Все права защищены
        </div>

      </section>
    </div>
  )
}