import AboutSection from "../../layouts/AboutSection/AboutSection";
import Header from "../../layouts/Header/Header";
import Introduction from "../../layouts/Introduction/Introduction";
import ProjectSection from "../../layouts/ProjectSection/ProjectSection";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Introduction />
        <AboutSection />
        <ProjectSection />
      </main>
    </>
  );
};

export default Home;
