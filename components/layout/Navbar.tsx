"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

const navItems = [
  { label: "Проекты", href: "/projects" },
  { label: "Новости", href: "/news" },
  { label: "Карьера", href: "/career" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contact" },
] as const;

export default function Navbar() {

  return (
    <motion.header
      
      className={clsx(
        styles.header,
        styles.headerScrolled
      )}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/largelogodark.svg"
            alt="Мостовик"
            fill
            className={clsx(
              styles.logoImage,
              
            )}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                styles.navLink,
                styles.navLinkDark
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
