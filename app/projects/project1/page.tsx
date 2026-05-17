import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/project1.module.css";

const Project1: NextPage = () => {
  return (
    <div className={styles.div}>
      <section className={styles.inner}>
        <div className={styles.headerParent}>
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
          <div className={styles.parent}>
            <Image
              className={styles.icon2}
              loading="lazy"
              width={1920}
              height={571}
              sizes="100vw"
              alt=""
              src="/1-1280-1@2x.png"
            />
            <section className={styles.frameParent}>
              <div className={styles.group}>
                <h3 className={styles.h3}>Главная</h3>
                <div className={styles.pathLabel}>
                  <div className={styles.pathLabelChild} />
                </div>
                <h3 className={styles.h32}>Проекты</h3>
                <div className={styles.pathLabel}>
                  <div className={styles.pathLabelChild} />
                </div>
                <h3 className={styles.h33}>
                  Горный многофункциональный комплекс на горе Ай-Петри
                </h3>
              </div>
              <b className={styles.b}>
                Горный многофункциональный комплекс на горе Ай-Петри
              </b>
            </section>
          </div>
        </div>
      </section>
      <section className={styles.child}>
        <div className={styles.frameGroup}>
          <section className={styles.detailItemsParent}>
            <div className={styles.detailItems}>
              <h3 className={styles.h34}>Регион:</h3>
              <h3 className={styles.h35}>Республика Крым</h3>
            </div>
            <div className={styles.detailItems2}>
              <h3 className={styles.h36}>{`Вид работ: `}</h3>
              <h3 className={styles.h37}>Инженерные изыскания</h3>
            </div>
            <div className={styles.detailItems3}>
              <h3 className={styles.h38}>Исполнитель:</h3>
              <h3 className={styles.h39}>ООО ПИК «Мостовик»</h3>
            </div>
            <div className={styles.detailItems4}>
              <h3 className={styles.h310}>Заказчик:</h3>
              <h3 className={styles.h311}>ООО «СБ Девелопмент»</h3>
            </div>
          </section>
          <div className={styles.screenshot71Parent}>
            <Image
              className={styles.screenshot71Icon}
              width={1194}
              height={849}
              sizes="100vw"
              alt=""
              src="/Screenshot-7-1@2x.png"
            />
            <Image
              className={styles.image1Icon}
              loading="lazy"
              width={573}
              height={489}
              sizes="100vw"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
        </div>
      </section>
      <main className={styles.slide1691}>
        <section className={styles.frameContainer}>
          <div className={styles.container}>
            <h1 className={styles.h1}>Описание</h1>
            <div className={styles.iii}>
              Горный многофункциональный комплекс на горе Ай-Петри в Республике
              Крым является технически сложным, уникальным объектом.
              <br />
              <br />
              Площадка расположена на высокогорном плато, на территории Верхней
              Станции канатной дороги «Мисхор – Ай-Петри» на высоте 1147м,
              подлежащей демонтажу (опасный производственный объект III класса
              опасности рег. № А63-03459-0004).
            </div>
          </div>
          <div className={styles.frameDiv}>
            <h1 className={styles.h1}>Характеристики</h1>
            <div className={styles.div2}>
              Высота над уровнем моря: 1147 м<br />
              <br />
              Общий строительный объём: 50 000 м³
            </div>
          </div>
        </section>
        <Image
          className={styles.slide1691Child}
          loading="lazy"
          width={888}
          height={1080}
          sizes="100vw"
          alt=""
          src="/Frame-56@2x.png"
        />
      </main>
      <section className={styles.slide1692}>
        <Image
          className={styles.slide1691Child}
          loading="lazy"
          width={888}
          height={1080}
          sizes="100vw"
          alt=""
          src="/Frame-61@2x.png"
        />
        <div className={styles.parent2}>
          <h1 className={styles.h1}>Состав работ</h1>
          <div className={styles.iii}>
            1. Основной объект из 2-х отдельных сооружений. Уникальное
            двухуровневое сооружение комплекса на плато горы Ай-Петри с
            выступающей консольной частью сооружения за опорную площадку
            (фундамент) на более 56 м над горным склоном. Комплекс предназначен
            в круглогодичном и круглосуточном режиме эксплуатации для
            организации различных видов отдыха и досуга. Общая площадь закрытого
            уровня 5 тыс. м², открытого уровня 4 тыс. м².
            <br />
            <br />
            2. Объекты инфраструктуры комплекса.
          </div>
        </div>
      </section>
      <section className={styles.slide1693Wrapper}>
        <div className={styles.slide1693}>
          <div className={styles.wrapper}>
            <h1 className={styles.h14}>Новости о проекте</h1>
          </div>
          <div className={styles.div4}>
            <Image
              className={styles.item}
              loading="lazy"
              width={552}
              height={321}
              sizes="100vw"
              alt=""
              src="/Frame-24@2x.png"
            />
            <section className={styles.frameSection}>
              <div className={styles.frame}>
                <h3 className={styles.h312}>27.02.2026</h3>
              </div>
              <div className={styles.wrapper2}>
                <div className={styles.div5}>
                  Завершены работы по выполнению инженерных изысканий по объекту
                  «Горный многофункциональный комплекс на горе Ай-Петри в
                  Республике Крым»
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <footer className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.logoParent}>
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
            <div className={styles.frameParent2}>
              <div className={styles.infoParent}>
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
                        <h3 className={styles.spaceFiller}>
                          office@pik-mostovik.ru
                        </h3>
                      </div>
                    </div>
                    <h3 className={styles.spaceFiller}>+7 (3812) 67-60-11</h3>
                  </div>
                  <div className={styles.departmentLabelParent}>
                    <h3 className={styles.departmentLabel}>
                      +7 (3812) 67-60-12
                    </h3>
                    <div className={styles.div6}>Отдел кадров</div>
                  </div>
                  <div className={styles.adress}>
                    <div className={styles.div7}>
                      644050, город Омск, <br />
                      проспект Мира, дом 5, корпус 5
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.buttonTop}>
                <div className={styles.iconarrow}>
                  <Image
                    className={styles.icon4}
                    loading="lazy"
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
          <div className={styles.div8}>
            © 2026 ООО ПИК  «Мостовик». Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Project1;
