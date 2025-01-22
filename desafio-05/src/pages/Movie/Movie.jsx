import Header from "./Header/Header";
import TheMovie from "./TheMovie/TheMovie";
import Footer from "./Footer/Footer";

import styles from "./Movie.module.css";

const Movie = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <TheMovie />
      </main>
      <Footer />
    </>
  );
};

export default Movie;
