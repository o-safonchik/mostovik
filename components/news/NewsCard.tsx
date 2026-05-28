"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/news.module.css"

interface NewsCardProps {
  slug: string
  title: string
  publishDate: string
  previewImage?: {
    url: string
    alt?: string
  }
}

export default function NewsCard({
  slug,
  title,
  publishDate,
  previewImage,
}: NewsCardProps) {
  const date = publishDate
    ? new Date(publishDate).toLocaleDateString("ru-RU")
    : ""

  const imageUrl = previewImage?.url || "/news/default.jpg"
  const imageAlt = previewImage?.alt || title

  return (
    <Link href={`/news/${slug}`} className={styles.section2}>
      {/* IMAGE — ВСЕГДА РЕНДЕРИТСЯ */}
      <Image
        className={styles.newsContainersIcon}
        width={552}
        height={321}
        alt={imageAlt}
        src={imageUrl}
        unoptimized
      />

      {/* TEXT BLOCK */}
      <div className={styles.newsBlocks}>
        <div className={styles.dividersWrapper}>
          <h3 className={styles.dividers}>{date}</h3>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.div2}>{title}</div>
        </div>
      </div>
    </Link>
  )
}