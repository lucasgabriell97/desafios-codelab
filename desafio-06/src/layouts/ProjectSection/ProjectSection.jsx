import styles from "./ProjectSection.module.css";
import Title from "../../components/Title/Title";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectSection = () => {
  return (
    <section className="section">
      <Title>Projetos</Title>
      <div className={styles.projectContainer}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
