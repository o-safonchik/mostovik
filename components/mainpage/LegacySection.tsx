'use client';

import Image from "next/image";

export default function LegacySection () {
  return (
    <div className="w-full bg-gray-100 flex flex-col items-stretch pb-[84px] box-border leading-normal tracking-normal text-left text-[18.8px] text-gray-700 font-montserrat">

      {/* HERITAGE */}
      <section className="w-full flex justify-center px-[clamp(20px,5vw,40px)] pb-[196px] text-[var(--Primary-blue)] font-[Montserrat]">
      <div className="w-full max-w-[1440px] flex flex-col gap-[94px]">

    {/* HEADER */}
    <div className="flex items-center justify-between flex-wrap gap-[20px]">
      <h2 className="text-[48px] font-bold tracking-[0.09em]">
        НАСЛЕДИЕ
      </h2>

      <button className="border-2 border-[#1c52d8] h-[64px] px-[28px] flex items-center gap-[12px] group transition hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)]">
        <span className="text-[#1c52d8] group-hover:text-white text-[16px] font-semibold">
          Подробнее
        </span>

        <Image
          className="w-[16px] h-[16px] group-hover:invert"
          width={16}
          height={16}
          alt=""
          src="/icons/arrowiconleft.svg"
        />
      </button>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 max-[1200px]:grid-cols-1 gap-[38px]">

      {/* CARD */}
      <div className="relative min-h-[360px] overflow-hidden bg-[var(--Primary-blue)] flex items-end p-[24px] group">

        <Image
          src="/mainpage/image7.png"
          fill
          className="object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
          alt=""
        />

        <div className="absolute inset-0 bg-black/20" />

        <h3 className="relative z-10 text-white text-[32px] font-semibold">
          Приморский океанариум
        </h3>

      </div>

      {/* CARD */}
        <div className="relative min-h-[360px] overflow-hidden bg-[var(--Primary-blue)] flex items-end p-[24px] group">

          <Image
            src="/mainpage/image8.png"
            fill
            className="object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
            alt=""
          />

          <div className="absolute inset-0 bg-black/20" />

          <h3 className="relative z-10 text-white text-[32px] font-semibold">
            Мост на остров Русский
          </h3>

        </div>

      {/* CARD */}
      <div className="relative min-h-[360px] overflow-hidden bg-[var(--Primary-blue)] flex items-end p-[24px] group">

        <Image
          src="/mainpage/image9.png"
          fill
          className="object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
          alt=""
        />

        <div className="absolute inset-0 bg-black/20" />

        <h3 className="relative z-10 text-white text-[32px] font-semibold">
          Самсоновский мост
        </h3>

      </div>

      {/* CARD */}
      <div className="relative min-h-[360px] overflow-hidden bg-[var(--Primary-blue)] flex items-end p-[24px] group">

        <Image
          src="/mainpage/image10.png"
          fill
          className="object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
          alt=""
        />

        <div className="absolute inset-0 bg-black/20" />

        <h3 className="relative z-10 text-white text-[32px] font-semibold">
          Успенский собор
        </h3>

      </div>

    </div>
  </div>
</section>
</div>
  );
};