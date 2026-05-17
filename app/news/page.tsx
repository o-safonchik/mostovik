import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/news.module.css";

const News: NextPage = () => {
  return (
    <div className={styles.div}>
      <section className={styles.news}>
        <div className={styles.smallLogo}>
          <Image
            className={styles.icon}
            loading="lazy"
            width={1875.6}
            height={1499.8}
            sizes="100vw"
            alt=""
            src="/2.svg"
          />
        </div>
        <header className={styles.header}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <div className={styles.largeLogo}>
                <Image
                  className={styles.icon2}
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
                src="/Group.svg"
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
                src="/Icon.svg"
              />
            </button>
          </div>
          <div className={styles.group}>
            <section className={styles.section}>
              <Image
                className={styles.newsContainersIcon}
                width={552}
                height={321}
                sizes="100vw"
                alt=""
                src="/News-Containers@2x.png"
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
            <section className={styles.section2}>
              <Image
                className={styles.newsContainersIcon}
                width={552}
                height={321}
                sizes="100vw"
                alt=""
                src="/Frame-24@2x.png"
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
                src="/Frame-24@2x.png"
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
                src="/Frame-24@2x.png"
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
                src="/Frame-24@2x.png"
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
                  src="/icon1.svg"
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
                  src="/icon1.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.logoParent}>
            <div className={styles.logo2}>
              <div className={styles.largeLogo2}>
                <Image
                  className={styles.icon2}
                  width={263}
                  height={52}
                  sizes="100vw"
                  alt=""
                  src="/2.svg"
                />
              </div>
            </div>
            <div className={styles.contactInfoParent}>
              <div className={styles.contactInfo}>
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
                      <div className={styles.text9}>
                        <h3 className={styles.space}>office@pik-mostovik.ru</h3>
                      </div>
                    </div>
                    <h3 className={styles.space}>+7 (3812) 67-60-11</h3>
                  </div>
                  <div className={styles.departmentInfoParent}>
                    <h3 className={styles.departmentInfo}>
                      +7 (3812) 67-60-12
                    </h3>
                    <div className={styles.div7}>Отдел кадров</div>
                  </div>
                  <div className={styles.adress}>
                    <div className={styles.div8}>
                      644050, город Омск, <br />
                      проспект Мира, дом 5, корпус 5
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.buttonTop}>
                <div className={styles.iconarrow3}>
                  <Image
                    className={styles.icon7}
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/icon1.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.div9}>
            © 2026 ООО ПИК  «Мостовик». Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
