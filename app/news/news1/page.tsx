import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/news1.module.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const News1: NextPage = () => {
  return (
    <div className={styles.div}>
      <main className={styles.containerWrapper}>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.newsContainerWrapper}>
            <div className={styles.newsContainer}>
              <div className={styles.newsHeader}>
                <div className={styles.wrapper}>
                  <h3 className={styles.h3}>Главная</h3>
                </div>
                <div className={styles.newsTitles}>
                  <div className={styles.newsTitlesChild} />
                </div>
                <div className={styles.div2}>Новости</div>
                <div className={styles.newsTitles}>
                  <div className={styles.newsTitlesChild} />
                </div>
                <h3 className={styles.h32}>Новость</h3>
              </div>
              <section className={styles.articleDetailsWrapper}>
                <div className={styles.articleDetails}>
                  <b className={styles.b}>
                    Завершены работы по выполнению инженерных изысканий по
                    объекту «Горный многофункциональный комплекс на горе
                    <br />
                    Ай-Петри в Республике Крым»
                  </b>
                  <div className={styles.articleFooter}>
                    <div className={styles.articleInfo}>
                      <div className={styles.frame}>
                        <h1 className={styles.h1}>27.02.2026</h1>
                      </div>
                      <button className={styles.buttonArrowSmallDark}>
                        <div className={styles.text6}>
                          <div className={styles.button6}>
                            Подробнее об объекте
                          </div>
                        </div>
                        <div className={styles.iconarrow}>
                          <Image
                            className={styles.icon2}
                            width={16}
                            height={16}
                            sizes="100vw"
                            alt=""
                            src="/icons/arrowiconleft.svg"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <section className={styles.companyInfoWrapper}>
        <div className={styles.companyInfo}>
          <Image
            className={styles.x6401Icon}
            loading="lazy"
            width={1024}
            height={640}
            sizes="100vw"
            alt=""
            src="/news/news1.png"
          />
          <div className={styles.completionDetails}>
            <div className={styles.div3}>
              ПИК «МОСТОВИК» успешно завершила работы по выполнению инженерных
              изысканий по объекту капитального строительства «Горный
              многофункциональный комплекс на горе Ай-Петри в Республике Крым»
              на высокогорном плато Ай-Петри на территории Верхней Станции
              канатной дороги «Мисхор – Ай-Петри» (абс. отметка 1 147 м).
              <br />
              Заказчик проекта: ООО «СБ Девелопмент»
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News1;
