"use client";

import { motion } from "framer-motion"
import Image from "next/image";

export default function Hero() {
  return (
    <main>
    <section className="relative h-screen overflow-hidden bg-[#172762]">
    {/* Background image */}
    <div className="absolute inset-0">
        <Image
        src="/bridgehero.svg"
        alt="Bridge"
        fill
        priority
        className="object-cover object-center opacity-60"
        />
    </div>

    {/* Dark cinematic overlay */}
    <div className="absolute inset-0 bg-[#172762]/70" />

    {/* Soft blue gradients */}
    <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-[#315AA9]/30 blur-3xl" />

        <div className="absolute bottom-[-30%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#001B68]/40 blur-3xl" />
    </div>

    {/* Giant logo watermark */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
        src="/logo.svg"
        alt="Logo"
        width={1200}
        height={1200}
        className="
            opacity-[0.05]
            scale-[1.4]
            object-contain
        "
        />
    </div>

    {/* Geometric overlays */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
        className="
            absolute
            left-[-200px]
            top-[-100px]
            h-[1200px]
            w-[420px]
            rotate-[35deg]
            bg-white/[0.04]
        "
        />

        <div
        className="
            absolute
            right-[-120px]
            top-[120px]
            h-[700px]
            w-[260px]
            rotate-[35deg]
            bg-white/[0.03]
        "
        />
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 h-[220px] w-full bg-gradient-to-t from-[#172762] to-transparent" />

    {/* Hero Content */}
    <div className="relative z-10 flex h-screen items-center">
        <div className="mx-auto flex w-full max-w-[1400px] px-12">
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[760px]"
        >
            {/* Title */}
            <h1
            className="
                text-[48px]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.04em]
                text-white
            "
            >
            Масштабные идеи
            <br />
            точные решения
            </h1>

            {/* Subtitle */}
            <p
            className="
                mt-10
                max-w-[520px]
                text-[20px]
                leading-relaxed
                text-white/75
            "
            >
            Инновационные инженерные решения для различных задач
            в области транспортного строительства
            </p>

            {/* Buttons */}
            <div className="mt-16 flex gap-6">
            <motion.button
                whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.12)",
                }}
                whileTap={{ scale: 0.98 }}
                className="
                group
                flex
                h-[68px]
                w-[220px]
                items-center
                justify-between
                border
                border-white/20
                bg-white/[0.04]
                px-8
                text-[15px]
                uppercase
                tracking-[0.18em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                "
            >
                <span>Проекты</span>

                <span
                className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                "
                >
                →
                </span>
            </motion.button>

            <motion.button
                whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.12)",
                }}
                whileTap={{ scale: 0.98 }}
                className="
                group
                flex
                h-[68px]
                w-[240px]
                items-center
                justify-between
                border
                border-white/20
                bg-white/[0.04]
                px-8
                text-[15px]
                uppercase
                tracking-[0.18em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                "
            >
                <span>О компании</span>

                <span
                className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                "
                >
                →
                </span>
            </motion.button>
            </div>
        </motion.div>
      </div>
   </div>
   </section>
   <section className="relative min-h-screen bg-white">
    <div className="relative z-10 flex h-screen items-center">
        <h2>Экспертиза проверенная временем</h2>
        <div>   
            <p>30+ лет на рынке</p>
            <p>850+ объектов в России и за её пределами</p>
        </div>
    </div>
    <div className="absolute inset-0">
        <Image
        src="/bridgehero2.jpg"
        alt="Bridge"
        fill
        priority
        className=""
        />
    </div>
    
   </section>
   </main>
    );
}