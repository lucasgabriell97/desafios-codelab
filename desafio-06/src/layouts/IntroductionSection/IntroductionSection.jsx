import styles from "./IntroductionSection.module.css";
import IllustrativeImage from "../../assets/images/Image.svg";

const IntroductionSection = () => {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.title}>
          Olá, eu sou <span>Iuri Silva</span>
        </h1>
        <p className={styles.description}>Desenvolvedor Frontend & UI Designer.</p>
        <button className={styles.button}>Baixar currículo</button>
      </div>
      <div>
        <img src={IllustrativeImage} alt="Ilustração de um smartphone se conectando com um planeta terra" />
      </div>
    </section>
  );
};

export default IntroductionSection;
