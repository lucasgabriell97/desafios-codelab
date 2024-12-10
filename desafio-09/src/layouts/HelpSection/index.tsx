import React from "react";
import Logo from "../../assets/images/logo.svg";
import DogImage from "../../assets/images/dog-1.png";

import { Button } from "../../components/Button";

export const HelpSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 px-8">
      <div className="lg:flex lg:items-center lg:gap-24 max-w-6xl mx-auto">
        <div className="flex flex-col items-center lg:items-start">
          <img className="mb-16 md:mb-20 lg:mb-28" src={Logo} alt="Logo HelpDog" />
          <h1 className="font-pangolin text-3xl md:text-4xl lg:text-5xl text-center lg:text-start max-w-80 md:max-w-96 lg:max-w-3xl mb-4 md:mb-6">
            Ajude quem realmente precisa da sua ajuda.
          </h1>
          <p className="font-roboto text-sm md:text-lg lg:text-xl text-center lg:text-start max-w-64 md:max-w-96 mb-12">
            Com apenas 1 real você pode me ajudar a alimentar cães de ruas.
          </p>
          <Button label="Ajudar agora" />
        </div>
        <div className="hidden lg:block">
          <img src={DogImage} alt="Imagem de um cachorro" />
        </div>
      </div>
    </section>
  );
};
