import React, { useEffect } from "react";
import styles from "./Header.module.css";

import MenuIcon from "../../assets/images/menu.svg";
import CloseIcon from "../../assets/images/close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1100) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`${styles.header} container`}>
      <h2 className={styles.logo}>{"< Iuri Silva />"}</h2>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuToggle}
      >
        {isMenuOpen ? (
          <img src={CloseIcon} alt="Ícone de fechar menu" />
        ) : (
          <img src={MenuIcon} alt="Ícone de abrir menu" />
        )}
      </button>
      <nav className={`${isMenuOpen ? styles.navbarMobile : styles.navbar}`}>
        <ul>
          <li>
            <a href="#introduction" onClick={handleLinkClick}>Início</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>Sobre mim</a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>Projetos</a>
          </li>
          <li>
            <a href="#services" onClick={handleLinkClick}>Serviços</a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>Habilidades</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
