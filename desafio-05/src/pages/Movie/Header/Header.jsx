import Logo from "../../../assets/images/logo.svg";
import LogoGoogle from "../../../assets/images/logo-google.svg";
import LogoFacebook from "../../../assets/images/logo-facebook.svg";
import LogoTwitter from "../../../assets/images/logo-twitter.svg";
import LogoInstagram from "../../../assets/images/logo-instagram.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo da Studio Ghibli" />
      </div>
      <nav>
        <ul className={styles.navbar}>
          <li><img src={LogoGoogle} alt="" /></li>
          <li><img src={LogoFacebook} alt="" /></li>
          <li><img src={LogoTwitter} alt="" /></li>
          <li><img src={LogoInstagram} alt="" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
