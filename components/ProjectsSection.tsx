import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/projectssection.module.css";

const ProjectsSection: NextPage = () => {
  return (
    <div className={styles.root}>
      <section className={styles.parent}>
        <h1 className={styles.h1}>ПРОЕКТЫ</h1>
        <div className={styles.locationsParent}>
          <div className={styles.locations}>
            <Image
              className={styles.icon}
              loading="lazy"
              width={448}
              height={561}
              sizes="100vw"
              alt=""
              src="/2-1280-1@2x.png"
            />
            <div className={styles.locationsChild} />
          </div>
          <div className={styles.group}>
            <b className={styles.b}>
              Горный многофункциональный комплекс на горе Ай-Петри
            </b>
            <h3 className={styles.h3}>Республика Крым</h3>
          </div>
        </div>
      </section>
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.locations}>
            <Image
              className={styles.icon}
              loading="lazy"
              width={448}
              height={391}
              sizes="100vw"
              alt=""
              src="/photo-03-1@2x.png"
            />
            <div className={styles.locationsChild} />
          </div>
          <div className={styles.projectDetails}>
            <b className={styles.b2}>
              Реконструкция надземного пешеходного перехода
            </b>
            <h3 className={styles.h32}>Астана, Казахстан</h3>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.locations}>
            <Image
              className={styles.icon2}
              loading="lazy"
              width={445}
              height={278}
              sizes="100vw"
              alt=""
              src="/4-1280-1@2x.png"
            />
            <div className={styles.locationsChild} />
          </div>
          <div className={styles.frameDiv}>
            <b className={styles.b3}>
              Многоуровневая наземная открытая автостоянка
            </b>
            <h3 className={styles.h32}>Ленинградская область</h3>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameParent2}>
          <div className={styles.locations}>
            <Image
              className={styles.icon}
              loading="lazy"
              width={448}
              height={561}
              sizes="100vw"
              alt=""
              src="/01-1280-1@2x.png"
            />
            <div className={styles.locationsChild} />
          </div>
          <div className={styles.projectDetails}>
            <b className={styles.b2}>Строительство детского сада</b>
            <h3 className={styles.h32}>Омская область</h3>
          </div>
        </div>
        <div className={styles.navigationButton}>
          <button className={styles.buttonArrowSmallDark}>
            <div className={styles.text}>
              <div className={styles.button}>Подробнее</div>
            </div>
            <input className={styles.iconarrow} type="checkbox" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
