'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/projectssection.module.css";
import Link from "next/link"

type Project = {
  id: string;
  title: string;
  slug: string;
  locationName: string;
  previewImage?: {
    url: string;
    alt?: string;
  };
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/globals/homepage?depth=2");
        const data = await res.json();

        setProjects(data?.featuredProjects || []);
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return null;
  if (!projects.length) return null;

  return (
    <div className={styles.root}>
      <section className={styles.parent}>
        <h1 className={styles.h1}>ПРОЕКТЫ</h1>

        {/* MAIN PROJECT */}
        {projects[0] && (
          <Link href={`/projects/${projects[0].slug}`}>
          <div className={styles.locationsParent}>
            <div className={styles.locations}>
              <Image
                className={styles.icon}
                src={projects[0].previewImage?.url || "/default.jpg"}
                width={448}
                height={561}
                alt={projects[0].previewImage?.alt || ""}
              />
              <div className={styles.locationsChild} />
            </div>

            <div className={styles.projectDetails}>
              <b className={styles.b2}>
                {projects[0].title}
              </b>
              <h3 className={styles.h32}>
                {projects[0].locationName}
              </h3>
            </div>
          </div>
          </Link>
        )}
      </section>

      {/* MIDDLE PROJECTS */}
      <section className={styles.frameParent}>
        {projects.slice(1, 3).map((project) => (
          <Link href={`/projects/${project.slug}`}>
          <div key={project.id} className={styles.frameGroup}>
            <div className={styles.locations}>
              <Image
                className={styles.icon}
                src={project.previewImage?.url || "/default.jpg"}
                width={448}
                height={391}
                alt={project.previewImage?.alt || ""}
              />
              <div className={styles.locationsChild} />
            </div>

            <div className={styles.projectDetails}>
              <b className={styles.b2}>
                {project.title}
              </b>
              <h3 className={styles.h32}>
                {project.locationName}
              </h3>
            </div>
          </div>
          </Link>
        ))}
      </section>

      {/* LAST + BUTTON */}
      <section className={styles.frameSection}>
        {projects[3] && (
          <Link href={`/projects/${projects[3].slug}`}>
          <div className={styles.frameParent2}>
            <div className={styles.locations}>
              <Image
                className={styles.icon}
                src={projects[3].previewImage?.url || "/default.jpg"}
                width={448}
                height={561}
                alt={projects[3].previewImage?.alt || ""}
              />
              <div className={styles.locationsChild} />
            </div>

            <div className={styles.projectDetails}>
              <b className={styles.b2}>
                {projects[3].title}
              </b>
              <h3 className={styles.h32}>
                {projects[3].locationName}
              </h3>
            </div>
          </div>
          </Link>
        )}


        <div className={styles.navigationButton}>
          <Link href={`/projects`}>
        <button className="border-2 border-[#1c52d8] bg-transparent h-[64px] min-w-[220px] px-[28px] flex items-center justify-center gap-[12px] transition hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)] hover:shadow-[0_12px_30px_rgba(28,82,216,0.2)] group"> 
            <span className="text-[#1c52d8] text-[16px] font-semibold group-hover:text-white"> 
                Подробнее 
            </span>
            <Image className="w-[16px] h-[16px] group-hover:invert" width={16} height={16} alt="" src="/icons/arrowiconleft.svg" />
        </button>
          </Link>
        </div>
      </section>
    </div>
  );
}