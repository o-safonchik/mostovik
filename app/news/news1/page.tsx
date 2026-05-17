import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/news1.module.css";

const News1: NextPage = () => {
  return (
    <div className={styles.div}>
      <main className={styles.containerWrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.navbar}>
              <div className={styles.logo}>
                <div className={styles.largeLogo}>
                  <Image
                    className={styles.icon}
                    loading="lazy"
                    width={285}
                    height={55.9}
                    sizes="100vw"
                    alt=""
                    src="/2.svg"
                  />
                </div>
              </div>
              <nav className={styles.menu}>
                <div className={styles.labelDark}>
                  <div className={styles.text}>
                    <div className={styles.button}>Проекты</div>
                  </div>
                </div>
                <div className={styles.labelDark}>
                  <div className={styles.text}>
                    <div className={styles.button}>Новости</div>
                  </div>
                </div>
                <div className={styles.labelDark}>
                  <div className={styles.text}>
                    <div className={styles.button}>Карьера</div>
                  </div>
                </div>
                <div className={styles.labelDark}>
                  <div className={styles.text}>
                    <div className={styles.button}>О компании</div>
                  </div>
                </div>
                <div className={styles.labelDark}>
                  <div className={styles.text}>
                    <div className={styles.button}>Контакты</div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
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
                            src="/icon1.svg"
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
            src="/01-1280-1024x640-1@2x.png"
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
      <footer className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.logo2}>
              <div className={styles.largeLogo2}>
                <Image
                  className={styles.icon}
                  width={263}
                  height={52}
                  sizes="100vw"
                  alt=""
                  src="/2.svg"
                />
              </div>
            </div>
            <div className={styles.footerInfo}>
              <div className={styles.infoContainer}>
                <div className={styles.info}>
                  <div className={styles.labelDark}>
                    <div className={styles.text}>
                      <div className={styles.button}>
                        Политика конфиденциальности
                      </div>
                    </div>
                  </div>
                  <div className={styles.labelDark}>
                    <div className={styles.text}>
                      <div className={styles.button}>Использование Cookie</div>
                    </div>
                  </div>
                  <div className={styles.labelDark}>
                    <div className={styles.text}>
                      <div className={styles.button}>
                        Пользовательское соглашение
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.contacts}>
                  <div className={styles.contact}>
                    <div className={styles.email}>
                      <div className={styles.text10}>
                        <h3 className={styles.emptySpace}>
                          office@pik-mostovik.ru
                        </h3>
                      </div>
                    </div>
                    <h3 className={styles.emptySpace}>+7 (3812) 67-60-11</h3>
                  </div>
                  <div className={styles.parent}>
                    <h3 className={styles.h33}>+7 (3812) 67-60-12</h3>
                    <div className={styles.div4}>Отдел кадров</div>
                  </div>
                  <div className={styles.adress}>
                    <div className={styles.div5}>
                      644050, город Омск, <br />
                      проспект Мира, дом 5, корпус 5
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonTop}>
                <div className={styles.iconarrow2}>
                  <Image
                    className={styles.icon4}
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/icon1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div6}>
            © 2026 ООО ПИК  «Мостовик». Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News1;
