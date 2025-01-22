import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Desafio do{" "}
        <a href="https://github.com/iuricode" target="_blank">
          IuriCode
        </a>
        . Desenvolvido por{" "}
        <a href="https://github.com/LucasGabriell97" target="_blank">
          Lucas Gabriell
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
