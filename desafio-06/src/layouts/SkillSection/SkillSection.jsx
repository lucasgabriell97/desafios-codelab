import styles from "./SkillSection.module.css";
import Title from "../../components/Title/Title";

import HtmlIcon from "../../assets/images/html.svg";
import CssIcon from "../../assets/images/css.svg";
import JavaScriptIcon from "../../assets/images/javascript.svg";
import TailwindIcon from "../../assets/images/tailwind.svg";
import ReactIcon from "../../assets/images/react.svg";
import NextIcon from "../../assets/images/next.svg";

const SkillSection = () => {
  const userSkills = [
    { icon: HtmlIcon, alt: "Ícone do HTML" },
    { icon: CssIcon, alt: "Ícone do CSS" },
    { icon: JavaScriptIcon, alt: "Ícone do JavaScript" },
    { icon: TailwindIcon, alt: "Ícone do Tailwind" },
    { icon: ReactIcon, alt: "Ícone do React" },
    { icon: NextIcon, alt: "Ícone do Next" },
  ];
  return (
    <section className="section">
      <Title>Habilidades</Title>
      <div className={styles.skillContainer}>
          {userSkills.map(({icon, alt}, index) => (
            <div className={styles.skillCard} key={index}>
              <img className={styles.icon} src={icon} alt={alt} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default SkillSection;
