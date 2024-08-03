import Header from "./Header/Header";
import TheMovie from "./TheMovie/TheMovie";

import styles from "./Movie.module.css";

const Movie = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <TheMovie />
      </main>
    </>
  );
};

export default Movie;
