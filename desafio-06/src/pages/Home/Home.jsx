import AboutSection from "../../layouts/AboutSection/AboutSection";
import Header from "../../layouts/Header/Header";
import Introduction from "../../layouts/Introduction/Introduction";
import ProjectSection from "../../layouts/ProjectSection/ProjectSection";
import ServiceSection from "../../layouts/ServiceSection/ServiceSection";
import SkillSection from "../../layouts/SkillSection/SkillSection";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Introduction />
        <AboutSection />
        <ProjectSection />
        <ServiceSection />
        <SkillSection />
      </main>
    </>
  );
};

export default Home;
