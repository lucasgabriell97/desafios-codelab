import AboutSection from "../../layouts/AboutSection/AboutSection";
import Header from "../../layouts/Header/Header";
import Introduction from "../../layouts/Introduction/Introduction";
import ProjectSection from "../../layouts/ProjectSection/ProjectSection";
import ServiceSection from "../../layouts/ServiceSection/ServiceSection";
import SkillSection from "../../layouts/SkillSection/SkillSection";
import Footer from "../../layouts/Footer/Footer";

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
      <Footer />
    </>
  );
};

export default Home;
