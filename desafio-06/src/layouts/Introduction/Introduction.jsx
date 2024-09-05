import styles from "./Introduction.module.css";
import IllustrativeImage from "../../assets/images/Image.svg";
import Button from "../../components/Button/Button";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div>
        <h1 className={styles.title}>
          Olá, eu sou <span>Iuri Silva</span>
        </h1>
        <p className={styles.description}>
          Desenvolvedor Frontend & UI Designer.
        </p>
        <Button>Baixar currículo</Button>
      </div>
      <div>
        <img
          src={IllustrativeImage}
          alt="Ilustração de um smartphone se conectando com um planeta terra"
        />
      </div>
    </div>
  );
};

export default Introduction;
