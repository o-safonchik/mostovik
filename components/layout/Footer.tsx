export default function Footer() {
  return (
    <footer className="border-t border-[#D7D9E0] bg-[#EFEFF2] py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-10 px-12">
        {/* Logo */}
        <div>
          <div className="text-4xl font-black text-[#1C2E6A]">
            МОСТОВИК
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4 text-[15px] text-[#1C2E6A]">
          <p>Политика конфиденциальности</p>
          <p>Использование Cookie</p>
          <p>Пользовательское соглашение</p>
        </div>

        {/* Contacts */}
        <div className="space-y-4 text-[15px] text-[#1C2E6A]">
          <p>office@pik-mostovik.ru</p>
          <p>+7 (3812) 67-60-11</p>
          <p>+7 (3812) 67-60-12</p>
        </div>

        {/* Address */}
        <div className="text-[15px] text-[#1C2E6A]">
          644050, город Омск,
          <br />
          проспект Мира, дом 5, корпус 5
        </div>
      </div>
    </footer>
  )
}