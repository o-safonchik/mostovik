"use client";

import { motion } from "framer-motion"
import Image from "next/image";
import styles from "@/styles/mainpage.module.css";

export default function Hero() {
  return (
    <section>   
    <section className="relative h-screen overflow-hidden bg-[#172762]">
    {/* Background image */}
    <div className="absolute inset-0">
        <Image
        src="/hero/bridgehero.jpg"
        alt="Bridge"
        fill
        priority
        className="object-cover object-center "
        />
    </div>

    {/* Dark cinematic overlay */}
    <div className="absolute inset-0 bg-[#172762]/70 opacity-80" />

    {/* Soft blue gradients */}
    <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-[#315AA9]/30 blur-3xl" />

        <div className="absolute bottom-[-30%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#001B68]/40 blur-3xl" />
    </div>

    {/* Giant logo watermark */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-end">
        <Image
        src="/logo.svg"
        alt="Logo"
        width={1200}
        height={1200}
        className="
            opacity-[0.10]
            scale-[1.4]
            object-contain
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
            <div className="text-[48px] text-white">
              <h1 className={styles.h1}>
                МАСШТАБНЫЕ ИДЕИ
                <br />
                ТОЧНЫЕ РЕШЕНИЯ
              </h1>
            </div>

            {/* Subtitle */}
            <p className={`${styles.div2} !mt-8 !h-auto !w-auto max-w-[555px] text-white/75`}>
              Инновационные инженерные решения для различных задач
              <br />
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
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                "
            >
                <span className={styles.button6}>Проекты</span>

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
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                "
            >
                <span className={styles.button6}>О компании</span>

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
   </section>
    );
}