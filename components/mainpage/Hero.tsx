"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/hero.module.css";
import Link from "next/link"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="absolute inset-0">
        <Image
          src="/hero/bg2.gif"
          alt="Мост"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[#172762]/60" aria-hidden />

      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-[#315AA9]/30 blur-3xl" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#001B68]/40 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-end">
        <motion.div
            initial={{
              opacity: 1,
              scale: 2.5,
            }}
            animate={{
              opacity: 0.1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
        <Image
          src="/Logo.svg"
          alt=""
          width={1200}
          height={1200}
          className="scale-[1] object-contain "
          aria-hidden
        />
        </motion.div>
      </div>
      

      {/*<div className="pointer-events-none absolute bottom-0 left-0 h-[220px] w-full bg-gradient-to-t from-[#172762] to-transparent" />*/}

      <div className={styles.content}>
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.copy}>
            <h1 className={styles.title}>
              МАСШТАБНЫЕ ИДЕИ
              <br />
              ТОЧНЫЕ РЕШЕНИЯ
            </h1>

            <p className={styles.subtitle}>
              Инновационные инженерные решения для различных задач в области
              проектирования и строительства
            </p>

            <div className={styles.actions}>
              <motion.button
                type="button"
                className={styles.button}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                
              >
                <Link href="/projects" className="absolute inset-0" aria-hidden />
                <span >Проекты</span>
                <span className={styles.buttonArrow} aria-hidden>
                  →
                </span>
              </motion.button>

              <motion.button
                type="button"
                className={styles.button}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/about" className="absolute inset-0" aria-hidden />
                <span>О компании</span>
                <span className={styles.buttonArrow} aria-hidden>
                  →
                </span>
                
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
