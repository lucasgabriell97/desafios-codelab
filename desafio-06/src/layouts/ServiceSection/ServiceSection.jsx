import styles from "./ServiceSection.module.css";
import Title from "../../components/Title/Title";

import CodeIcon from "../../assets/images/code.svg";
import FigmaIcon from "../../assets/images/figma.svg";
import PhoneIcon from "../../assets/images/smartphone.svg";

const ServiceSection = () => {
  const userServices = [
    { icon: CodeIcon, title: "Criação de sites", alt: "Ícone de código" },
    { icon: FigmaIcon, title: "UI/UX Designer", alt: "Ícone do figma" },
    { icon: PhoneIcon, title: "Sites responsivos", alt: "Ícone de celular" },
  ];

  return (
    <section className="section">
      <Title>Serviços</Title>
      <div className={styles.serviceContainer}>
        {userServices.map(({ icon, title, alt }, index) => (
          <div className={styles.serviceCards} key={index}>
            <img className={styles.icon} src={icon} alt={alt} />
            <h3 className={styles.title}>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
