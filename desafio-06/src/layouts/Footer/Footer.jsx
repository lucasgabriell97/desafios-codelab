import styles from "./Footer.module.css";
import LogoIcon from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <p>@ 2022 - Iuri Silva</p>
        <div className={styles.logo}>
          <span>Powered by</span>
          <img src={LogoIcon} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
