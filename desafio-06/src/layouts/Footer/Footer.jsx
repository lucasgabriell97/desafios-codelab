import styles from "./Footer.module.css";
import LogoIcon from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <p>@ 2022 - Iuri Silva</p>
      <div className={styles.logo}>
        <span>Powered by</span>
        <img src={LogoIcon} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
