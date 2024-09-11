import React, { useEffect } from "react";
import styles from "./BackToTop.module.css";
import ArrowIcon from "../../assets/images/arrow.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo(top);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
    >
      <img src={ArrowIcon} alt="Ícode de seta para cima" />
    </button>
  );
};

export default BackToTop;
