import Link from "next/link";

export default function CareerHero() {
  return (
    <div className="flex flex-col gap-[35px]">
      <div className="flex items-center gap-[7px] text-sm text-[#1C52D8] font-medium">
        <span><Link href="/">Главная</Link></span>

        <div className="w-[20px] h-[2px] bg-[#1C52D8]" />

        <span>Карьера</span>
      </div>

      <h1 className="text-5xl leading-none font-bold tracking-wide text-[#172762]">
        КАРЬЕРА
      </h1>

      <p className="max-w-[980px] text-[28px] leading-[140%] text-[#172762] font-medium">
        Присоединяйтесь к нам, чтобы вместе создавать надёжные и инновационные
        объекты транспортной инфраструктуры!
      </p>
    </div>
  )
}