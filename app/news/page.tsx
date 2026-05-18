import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/news.module.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const News: NextPage = () => {
  return (
    <div className={styles.div}>
      <section className={styles.news}>
        <div className={styles.smallLogo}>
          
        </div>
        <Navbar />
        <div className={styles.newsInner}>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <h3 className={styles.h3}>Главная</h3>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild} />
              </div>
              <h3 className={styles.h32}>Новости</h3>
            </div>
            <h1 className={styles.h1}>НОВОСТИ</h1>
          </div>
        </div>
      </section>
      <main className={styles.inner}>
        <div className={styles.frameGroup}>
          <div className={styles.iconfilterParent}>
            <button className={styles.iconfilter}>
              <Image
                className={styles.groupIcon}
                loading="lazy"
                width={29.1}
                height={29.1}
                sizes="100vw"
                alt=""
                src="/icons/filter.svg"
              />
            </button>
            <button className={styles.iconsearch}>
              <Image
                className={styles.groupIcon}
                loading="lazy"
                width={29.1}
                height={29.1}
                sizes="100vw"
                alt=""
                src="/icons/search.svg"
              />
            </button>
          </div>
          <div className={styles.group}>
            <a href="/news/news1">  
            <section className={styles.section}>
              <Image
                className={styles.newsContainersIcon}
                width={552}
                height={321}
                sizes="100vw"
                alt=""
                src="/news/1.png"
              />
              <div className={styles.newsBlocks}>
                <div className={styles.dividersWrapper}>
                  <h3 className={styles.dividers}>22.04.2026</h3>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div2}>
                    Начаты работы по проектированию объектов высокоскоростной
                    железнодорожной магистрали Санкт-Петербург — Москва —
                    Великий Новгород
                  </div>
                </div>
              </div>
            </section>
            </a>
            <section className={styles.section2}>
              <Image
                className={styles.newsContainersIcon}
                width={552}
                height={321}
                sizes="100vw"
                alt=""
                src="/news/2.png"
              />
              <div className={styles.newsBlocks}>
                <div className={styles.dividersWrapper}>
                  <h3 className={styles.dividers}>17.04.2026</h3>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div2}>
                    Заключен государственный контракт на проектирование
                    автомобильных дорог в Чукотском автономном округе
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.section2}>
              <Image
                className={styles.newsContainersIcon}
                width={552}
                height={321}
                sizes="100vw"
                alt=""
                src="/news/3.png"
              />
              <div className={styles.newsBlocks}>
                <div className={styles.dividersWrapper}>
                  <h3 className={styles.dividers}>31.03.2026</h3>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div2}>
                    Получено положительное заключение экспертизы сметной
                    стоимости по объекту «Строительство
                    природно-оздоровительного комплекса категории 5*
                    «Байкальская гавань»
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.section2}>
              <Image
                className={styles.newsContainersIcon}
                width={552}
                height={321}
                sizes="100vw"
                alt=""
                src="/news/4.png"
              />
              <div className={styles.newsBlocks}>
                <div className={styles.dividersWrapper}>
                  <h3 className={styles.dividers}>30.03.2026</h3>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div2}>
                    Получено положительное заключение экспертизы проектной
                    документации по объекту «Строительство
                    природно-оздоровительного комплекса категории 5*
                    «Байкальская гавань»
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.section2}>
              <Image
                className={styles.newsContainersIcon}
                width={552}
                height={321}
                sizes="100vw"
                alt=""
                src="/news/5.png"
              />
              <div className={styles.newsBlocks}>
                <div className={styles.dividersWrapper}>
                  <h3 className={styles.dividers}>16.03.2026</h3>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div2}>
                    Начаты работы по проектированию поликлиники в г. Бугры
                    Ленинградской области
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.iconarrowParent}>
              <button className={styles.iconarrow}>
                <Image
                  className={styles.icon4}
                  loading="lazy"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/icons/Arrow.svg"
                />
              </button>
              <div className={styles.pageNumbers}>
                <button className={styles.pages}>1</button>
                <button className={styles.pages2}>2</button>
                <button className={styles.pages2}>3</button>
                <button className={styles.pages2}>4</button>
              </div>
              <button className={styles.iconarrow2}>
                <Image
                  className={styles.icon5}
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/icons/Arrowlftpan.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
     <Footer />
    </div>
  );
};

export default News;
