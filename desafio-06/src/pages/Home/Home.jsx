import AboutSection from "../../layouts/AboutSection/AboutSection";
import Header from "../../layouts/Header/Header";
import IntroductionSection from "../../layouts/IntroductionSection/IntroductionSection";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container">
        <IntroductionSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Home;
