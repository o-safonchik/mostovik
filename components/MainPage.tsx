'use client';

import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/mainpage.module.css";
import ProjectsMap from "./ProjectsMap";
import ProjectsSection from "./ProjectsSection";

const MainPage: NextPage = () => {
  
  return (
    <div className={styles.div}>
        <ProjectsMap />
         <ProjectsSection />
      <section className={styles.child}>
        <div className={styles.parent7}>
          <h2 className={styles.h12}>НОВОСТИ</h2>
          <div className={styles.frameParent2}>
            <section className={styles.frameWrapper}>
              <div className={styles.topImageParent}>
                <div className={styles.topImage}>
                  <h3 className={styles.h37}>22.04.2026</h3>
                  <div className={styles.image4Parent}>
                    <Image
                      className={styles.image4Icon}
                      loading="lazy"
                      width={487}
                      height={304}
                      sizes="100vw"
                      alt=""
                      src="/mainpage/image4.png"
                    />
                    <div className={styles.div8}>
                      Начаты работы по проектированию объектов высокоскоростной
                      железнодорожной магистрали Санкт-Петербург — Москва —
                      Великий Новгород
                    </div>
                  </div>
                </div>
                <div className={styles.bottomImage}>
                  <h3 className={styles.h38}>17.04.2026</h3>
                  <div className={styles.image4Parent}>
                    <Image
                      className={styles.image4Icon2}
                      loading="lazy"
                      width={486.4}
                      height={304}
                      sizes="100vw"
                      alt=""
                      src="/mainpage/image5.png"
                    />
                    <div className={styles.div8}>
                      Заключен государственный контракт на проектирование
                      автомобильных дорог в Чукотском автономном округе
                    </div>
                  </div>
                </div>
                <div className={styles.lastImage}>
                  <div className={styles.parent8}>
                    <h3 className={styles.h38}>31.03.2026</h3>
                    <div className={styles.image4Parent}>
                      <Image
                        className={styles.image4Icon2}
                        loading="lazy"
                        width={486.4}
                        height={304}
                        sizes="100vw"
                        alt=""
                        src="/mainpage/image6.png"
                      />
                      <div className={styles.div8}>
                        Получено положительное заключение экспертизы сметной
                        стоимости по объекту «Строительство
                        природно-оздоровительного комплекса категории
                        «Байкальская гавань»
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.buttonArrowSmallDarkParent}>
              <button className={styles.buttonArrowSmallDark2}>
                <div className={styles.text6}>
                  <div className={styles.button8}>Подробнее</div>
                </div>
                <div className={styles.iconarrow}>
                  <Image
                    className={styles.icon11}
                    width={16}
                    height={16}
                    sizes="100vw"
                    alt=""
                    src="/icons/arrowiconleft.svg"
                  />
                </div>
              </button>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent3}>
                  <div className={styles.parkingDetailsWrapper}>
                    <h2 className={styles.parkingDetails}>01/04</h2>
                  </div>
                  <div className={styles.iconBadgeParent}>
                    <Image
                      className={styles.iconBadge}
                      width={77}
                      height={77}
                      sizes="100vw"
                      alt=""
                      src="/icons/iconright.svg"
                    />
                    <Image
                      className={styles.iconBadge2}
                      width={77}
                      height={77}
                      sizes="100vw"
                      alt=""
                      src="/icons/iconleft.svg"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className={styles.heritageSection}>
        <div className={styles.heritageInner}>
          <div className={styles.titleButton}>
            <h2 className={styles.h22}>НАСЛЕДИЕ</h2>
            <button className={styles.buttonArrowSmallDark}>
              <div className={styles.text6}>
                <div className={styles.button8}>Подробнее</div>
              </div>
              <div className={styles.iconarrow}>
                <Image
                  className={styles.icon11}
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/icons/arrowiconleft.svg"
                />
              </div>
            </button>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.image5Parent}>
                <Image
                  className={styles.image5Icon}
                  fill
                  sizes="(max-width: 1440px) 40vw, 500px"
                  alt=""
                  src="/mainpage/image7.png"
                />
                <h3 className={styles.h310}>Приморский океанариум</h3>
              </div>
              <div className={styles.image6Parent}>
                <Image
                  className={styles.image6Icon}
                  loading="lazy"
                  fill
                  sizes="(max-width: 1440px) 55vw, 700px"
                  alt=""
                  src="/mainpage/image8.png"
                />
                <h2 className={styles.h23}>Мост на остров Русский</h2>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.image8Parent}>
                <Image
                  className={styles.image8Icon}
                  fill
                  sizes="(max-width: 1440px) 55vw, 700px"
                  alt=""
                  src="/mainpage/image9.png"
                />
                <h2 className={styles.h24}>Самсоновский мост</h2>
              </div>
              <div className={styles.image7Parent}>
                <Image
                  className={styles.image7Icon}
                  loading="lazy"
                  fill
                  sizes="(max-width: 1440px) 40vw, 500px"
                  alt=""
                  src="/mainpage/image10.png"
                />
                <h2 className={styles.h310}>Успенский собор</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
