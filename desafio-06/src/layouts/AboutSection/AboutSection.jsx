import styles from "./AboutSection.module.css";
import SmileIcon from "../../assets/images/smile.svg";
import EmailIcon from "../../assets/images/mail.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import PhoneIcon from "../../assets/images/phone.svg";

import Title from "../../components/Title/Title";

const AboutSection = () => {
  const userInfo = [
    { icon: SmileIcon, title: "Nome", value: "Iuri Silva", alt: "Ícone de sorriso" },
    { icon: EmailIcon, title: "E-mail", value: "codelab@gmail.com", alt: "Ícone de email" },
    { icon: InstagramIcon, title: "Instagram", value: "@iuricode", alt: "Ícone do instagram" },
    { icon: PhoneIcon, title: "Telefone", value: "(14) 99999-9999", alt: "Ícone de telefone" },
  ];

  return (
    <section id="about" className="section">
      <div className={styles.about}>
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
        {userInfo.map(({icon, title, value, alt}, index) => (
          <div key={index}>
            <div className={styles.icon}>
              <img src={icon} alt={alt} />
            </div>
            <p className={styles.titulo}>{title}</p>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
