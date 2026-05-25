"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface Props {
  title: string
  location: string
  image: string
}

export default function ProjectCard({
  title,
  location,
  image,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden"
     
    >
      {/* Image */}
      <div className="relative aspect-[1.45/1] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
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
        <a href="/projects/inzhenernye-izyskaniya-dlya-obuekta-gornyj-mnogofunkcionalnyj-kompleks-na-gore-aj-petri">
        <h3 className="max-w-[420px] text-[28px] font-semibold leading-tight">
          {title}
        </h3>

        <p className="mt-4 text-[18px] text-white/80">
          {location}
        </p>
        </a>
      </div>
    </motion.div>
  )
}