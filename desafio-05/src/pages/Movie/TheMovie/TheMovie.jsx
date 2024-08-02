import MovieImg from "../../../assets/images/image.svg";
import Play from "../../../assets/images/Play.svg";

import styles from "./TheMovie.module.css";

const TheMovie = () => {
  return (
    <div className={styles.movie}>
      <div className={styles.movieImg}>
        <img src={MovieImg} alt="Imagem do filme A viagem de Chihiro" />
      </div>
      <div className={styles.movieContent}>
        <span>Hayao Miyazaki</span>
        <h1 className={styles.movieTitle}>A viagem de Chihiro</h1>
        <p className={styles.movieDescription}>
          Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
          desobedecem são transformados em animais.
        </p>
        <div className={styles.buttons}>
          <button className={styles.watchMovie}>
            <img src={Play} alt="" />
            Assistir agora
          </button>
          <button className={styles.watchTrailer}>Assista o trailer</button>
        </div>
      </div>
    </div>
  );
};

export default TheMovie;
