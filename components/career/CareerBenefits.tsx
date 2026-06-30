import Image from "next/image";

export default function CareerBenefits() {
  return (
    <section className="pb-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-[70px]">
          <h2 className="text-[32px] font-bold text-[#172762]">
            Мы предлагаем
          </h2>
          <div className="flex flex-row gap-10 justify-between">
          <div className="max-w-[700px] flex flex-col gap-8">
              <div className="bg-white p-10  flex items-start border border-[#DCE2EE] hover:-translate-y-2 transition-all duration-500">
                <p className="text-[24px] leading-[150%] text-[#172762] font-medium">
                  Работу над масштабными и знаковыми проектами, которые войдут в историю отечественной инфраструктуры
                </p>
              </div>
              <div className="bg-white p-10  flex items-start border border-[#DCE2EE] hover:-translate-y-2 transition-all duration-500">
                <p className="text-[24px] leading-[150%] text-[#172762] font-medium">
                  Повышенную оплату труда, соответствующую вашим ожиданиям
                </p>
              </div>
              <div className="bg-white p-10  flex items-start border border-[#DCE2EE] hover:-translate-y-2 transition-all duration-500">
                <p className="text-[24px] leading-[150%] text-[#172762] font-medium">
                  Возможность применить и приумножить накопленный опыт, участвовать в развитии перспективных проектных технологий
                </p>
              </div>
          </div>
          <Image 
            src="/career/2.jpg"
            alt="Строительство моста на остров Русский"
            width={600}
            height={600}
            unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}