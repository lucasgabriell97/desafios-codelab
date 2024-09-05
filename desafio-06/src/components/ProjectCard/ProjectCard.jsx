import styles from "./ProjectCard.module.css";
import Button from "../Button/Button";

const ProjectCard = () => {
  return (
    <div>
      <div className={styles.projectImage}>
        <span>Imagem projeto</span>
      </div>
      <h3 className={styles.title}>Nome do projeto</h3>
      <span className={styles.text}>Tecnologias usadas no projeto</span>
      <div className={styles.buttons}>
        <Button>Acessar o projeto</Button>
        <button className={styles.button}>Acessar repositório</button>
      </div>
    </div>
  );
};

export default ProjectCard;
