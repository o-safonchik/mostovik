import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/mainpage.module.css";
import ProjectsSection from "./ProjectsSection";


const MainPage: NextPage = () => {
  return (
    <div className={styles.div}>
      <section className={styles.slide1697}>
        <Image
          className={styles.vvost97711Icon}
          width={1920}
          height={1080}
          sizes="100vw"
          alt=""
          src="/mainpage/bridgehero2.jpg"
        />
        <section className={styles.parent}>
          <h3 className={styles.h3}>Экспертиза проверенная временем</h3>
          <div className={styles.component1Parent}>
            <div className={styles.component1}>
              <b className={styles.b}>
                <span>
                  30+
                  <br />
                </span>
                <span className={styles.span}>лет на рынке</span>
              </b>
            </div>
            <div className={styles.component2}>
              <b className={styles.b2}>
                <span className={styles.txt}>
                  <span>
                    850+
                    <br />
                  </span>
                  <span className={styles.span}>
                    объектов в России и за её пределами
                  </span>
                </span>
              </b>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.slide1698Wrapper}>
        <div className={styles.slide1698}>
          <Image
            className={styles.vvost97711Icon}
            loading="lazy"
            width={1920}
            height={1080}
            sizes="100vw"
            alt=""
            src="/mainpage/bridgehero3.jpg"
          />
          <div className={styles.group}>
            <h3 className={styles.h32}>
              Выполняем комплексные работы по проектированию:
            </h3>
            <div className={styles.container}>
              <div className={styles.div3}>
                Объектов транспортной инфраструктуры
              </div>
              <div className={styles.div4}>
                Объектов промышленного и гражданского назначения
              </div>
              <div className={styles.div4}>
                Специальных объектов, объектов коммунального назначения
              </div>
              <div className={styles.div6}>
                Объектов нефтехимии и энергетики
              </div>
              <div className={styles.div7}>Гидротехнических сооружений</div>
            </div>
          </div>
        </div>
      </section>
      <ProjectsSection />
      {/* <section className={styles.inner}>
        <div className={styles.frameParent}>
          <section className={styles.frameSection}>
            <h1 className={styles.h12}>ПРОЕКТЫ</h1>
            <div className={styles.frameDiv}>
              <Image
                className={styles.icon8}
                width={960}
                height={600}
                sizes="100vw"
                alt=""
                src="/mainpage/2_1280.png"
              />
              <div className={styles.parent2}>
                <b className={styles.b3}>
                  Горный многофункциональный комплекс на горе Ай-Петри
                </b>
                <h3 className={styles.h33}>Республика Крым</h3>
              </div>
            </div>
          </section>
          <section className={styles.frameGroup}>
            <div className={styles.photo031Parent}>
              <Image
                className={styles.photo031Icon}
                width={689}
                height={405}
                sizes="100vw"
                alt=""
                src="/mainpage/2.png"
              />
              <div className={styles.parent3}>
                <b className={styles.b4}>
                  Реконструкция надземного пешеходного перехода
                </b>
                <h3 className={styles.h34}>Астана, Казахстан</h3>
              </div>
            </div>
            <div className={styles.parent4}>
              <Image
                className={styles.icon9}
                width={445}
                height={278}
                sizes="100vw"
                alt=""
                src="/mainpage/4_ee.png"
              />
              <div className={styles.parent5}>
                <b className={styles.b5}>
                  Многоуровневая наземная открытая автостоянка
                </b>
                <h3 className={styles.h34}>Ленинградская область</h3>
              </div>
            </div>
          </section>
          <section className={styles.frameContainer}>
            <div className={styles.parent6}>
              <Image
                className={styles.icon10}
                loading="lazy"
                width={1082}
                height={676}
                sizes="100vw"
                alt=""
                src="/mainpage/3.png"
              />
              <div className={styles.kindergartenData}>
                <b className={styles.b4}>Строительство детского сада</b>
                <h3 className={styles.h34}>Омская область</h3>
              </div>
            </div>
            <div className={styles.buttonArrowSmallDarkWrapper}>
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
                    src="/icon1.svg"
                  />
                </div>
              </button>
            </div>
          </section>
        </div>
      </section>*/}
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
                      src="/image-4@2x.png"
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
                      src="/image-41@2x.png"
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
                        src="/image-42@2x.png"
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
                    src="/icon1.svg"
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
                      src="/Icon-badge.svg"
                    />
                    <Image
                      className={styles.iconBadge2}
                      width={77}
                      height={77}
                      sizes="100vw"
                      alt=""
                      src="/Icon-badge.svg"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className={styles.inner2}>
        <div className={styles.titleButtonParent}>
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
                  src="/icon1.svg"
                />
              </div>
            </button>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.image5Parent}>
                <Image
                  className={styles.image5Icon}
                  width={619}
                  height={387}
                  sizes="100vw"
                  alt=""
                  src="/image-5@2x.png"
                />
                <h3 className={styles.h310}>Приморский океанариум</h3>
              </div>
              <div className={styles.image6Parent}>
                <Image
                  className={styles.image6Icon}
                  loading="lazy"
                  width={888}
                  height={555}
                  sizes="100vw"
                  alt=""
                  src="/image-6@2x.png"
                />
                <h2 className={styles.h23}>Мост на остров Русский</h2>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.image8Parent}>
                <Image
                  className={styles.image8Icon}
                  width={887}
                  height={554}
                  sizes="100vw"
                  alt=""
                  src="/image-8@2x.png"
                />
                <h2 className={styles.h24}>Самсоновский мост</h2>
              </div>
              <div className={styles.image7Parent}>
                <Image
                  className={styles.image7Icon}
                  loading="lazy"
                  width={803}
                  height={446}
                  sizes="100vw"
                  alt=""
                  src="/image-7@2x.png"
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
