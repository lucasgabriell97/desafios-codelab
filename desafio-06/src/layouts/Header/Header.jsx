import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <h2 className={styles.logo}>{"< Iuri Silva />"}</h2>
      <nav>
        <ul>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Sobre mim</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Habilidades</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
