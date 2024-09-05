import styles from "./AboutSection.module.css";
import SmileIcon from "../../assets/images/smile.svg";
import EmailIcon from "../../assets/images/mail.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import PhoneIcon from "../../assets/images/phone.svg";

import Title from "../../components/Title/Title";

const AboutSection = () => {
  const userInfo = [
    { icon: SmileIcon, titulo: "Nome", value: "Iuri Silva" },
    { icon: EmailIcon, titulo: "E-mail", value: "codelab@gmail.com" },
    { icon: InstagramIcon, titulo: "Instagram", value: "@iuricode" },
    { icon: PhoneIcon, titulo: "Telefone", value: "(14) 99999-9999" },
  ];

  return (
    <section className={`${styles.about} section`}>
      <div className={styles.aboutMe}>
        <Title>Sobre mim</Title>
        <p className={styles.description}>
          Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou o
          criador do eFront, um material de ensino de frontend pela internet.
          Atualmente sou freelancer como Frontend Developer e UI Designer.
          Desenvolvo interfaces modernas e de alta qualidade, concentrado em
          performance, animações, responsividade e SEO.
        </p>
      </div>
      <div className={styles.info}>
        {userInfo.map((info, index) => (
          <div key={index}>
            <div className={styles.icon}>
              <img src={info.icon} alt="" />
            </div>
            <p className={styles.titulo}>{info.titulo}</p>
            <span className={styles.value}>{info.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
