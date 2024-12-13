import React from "react";

import Logo from "../../assets/images/logo.svg";
import IllustrativeChristmasImage from "../../assets/images/imagem.svg";

import { Button } from "../../components/Button";

export const IntroSection: React.FC = () => {
  return (
    <section className="bg-brand-color-pink">
      <div className="py-24 px-6 flex flex-col items-center gap-16 md:gap-32">
        <div className="flex flex-col items-center">
          <img className="mb-8" src={Logo} alt="Logo de Feliz Natal" />
          <h1 className="title max-w-sm md:max-w-md">
            Uma{" "}
            <span className="text-brand-color-red">plataforma de doação</span>{" "}
            para espalhar alegria
          </h1>
          <p className="text-lg md:text-2xl font-normal text-center text-dark mb-10 max-w-sm md:max-w-xl">
            Nessas festas de fim de ano mande um presente para a pessoa amada e
            compartilhe a alegria do Natal.
          </p>
          <Button />
        </div>
        <div>
          <img
            src={IllustrativeChristmasImage}
            alt="Imagem ilustrativa de natal"
          />
        </div>
      </div>
    </section>
  );
};
