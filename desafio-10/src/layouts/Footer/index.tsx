import React from "react";

import Logo from "../../assets/images/logo.svg";
import TwitterLogo from "../../assets/images/logo-twitter.svg";
import WhatsappLogo from "../../assets/images/logo-whatsapp.svg";
import InstagramLogo from "../../assets/images/logo-instagram.svg";
import FacebookLogo from "../../assets/images/logo-facebook.svg";
import GoogleLogo from "../../assets/images/logo-google.svg";

import { MediaIcon } from "../../components/MediaIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-color-pink py-12 lg:py-5 px-6">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:max-w-6xl lg:mx-auto">
        <div>
          <img src={Logo} alt="Logo de Feliz Natal" />
        </div>
        <div className="flex flex-wrap justify-center gap-9">
          <MediaIcon icon={TwitterLogo} />
          <MediaIcon icon={WhatsappLogo} />
          <MediaIcon icon={InstagramLogo} />
          <MediaIcon icon={FacebookLogo} />
          <MediaIcon icon={GoogleLogo} />
        </div>
      </div>
    </footer>
  );
};
