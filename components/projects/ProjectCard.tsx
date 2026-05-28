"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/dist/client/link"

interface Props {
  slug: string
  title: string
  locationName?: string
  previewImage?: {
    url: string
    alt?: string
  }
}

export default function ProjectCard({
  slug,
  title,
  locationName,
  previewImage,
}: Props) {
  const imageUrl = previewImage?.url || "/default.jpg";
  const imageAlt = previewImage?.alt || title;
  return (
    

    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden"
     
    >
    <Link href={`/projects/${slug}`}>
      {/* Image */}
      <div className="relative aspect-[1.45/1] overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          unoptimized
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1C2E6A]/45" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 text-white" >
        
        <h3 className="max-w-[420px] text-[28px] font-semibold leading-tight">
          {title}
        </h3>

        <p className="mt-4 text-[18px] text-white/80">
          {locationName}
        </p>
      </div>
      </Link>
    </motion.div>
  )
}