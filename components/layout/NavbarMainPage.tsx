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

export default function Navbar1() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={clsx(
        styles.header,
        scrolled ? styles.headerScrolled : styles.headerTransparent
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
              !scrolled && styles.logoImageLight
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
                scrolled ? styles.navLinkDark : styles.navLinkLight
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
