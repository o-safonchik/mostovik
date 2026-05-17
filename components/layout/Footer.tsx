import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/footer.module.css";

const Footer: NextPage = () => {
  return (
    <div className={styles.footerParent}>
      <section className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <div className={styles.largeLogo}>
              <Image
                className={styles.icon}
                loading="lazy"
                width={263}
                height={52}
                sizes="100vw"
                alt=""
                src="/largelogotitle.svg"
              />
            </div>
          </div>
          <div className={styles.footerDetails}>
            <div className={styles.contactDetails}>
              <div className={styles.info}>
                <div className={styles.labelDark}>
                  <div className={styles.text}>
                    <div className={styles.button}>
                      Политика конфиденциальности
                    </div>
                  </div>
                  <div className={styles.labelDarkChild} />
                </div>
                <div className={styles.labelDark2}>
                  <div className={styles.text2}>
                    <div className={styles.button}>Использование Cookie</div>
                  </div>
                </div>
                <div className={styles.labelDark2}>
                  <div className={styles.text2}>
                    <div className={styles.button}>
                      Пользовательское соглашение
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contacts}>
                <div className={styles.contact}>
                  <div className={styles.email}>
                    <div className={styles.text}>
                      <h3 className={styles.whitespace}>
                        office@pik-mostovik.ru
                      </h3>
                    </div>
                  </div>
                  <h3 className={styles.whitespace}>+7 (3812) 67-60-11</h3>
                </div>
                <div className={styles.hrDepartment}>
                  <h3 className={styles.departmentNames}>+7 (3812) 67-60-12</h3>
                  <div className={styles.div}>Отдел кадров</div>
                </div>
                <div className={styles.adress}>
                  <div className={styles.div2}>
                    644050, город Омск, <br />
                    проспект Мира, дом 5, корпус 5
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.buttonTop}>
              <div className={styles.iconarrow}>
                <Image
                  className={styles.icon2}
                  loading="lazy"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/icons.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.div3}>
          © 2026 ООО ПИК  «Мостовик». Все права защищены
        </div>
      </section>
    </div>
  );
};

export default Footer;
