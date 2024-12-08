import React from "react";
import Logo from "../../assets/images/logo.svg";

import { Button } from "../../components/Button";

export const HelpSection: React.FC = () => {
  return (
    <section className="py-20 px-8">
      <div className="flex flex-col items-center">
        <img className="mb-16 md:mb-20" src={Logo} alt="Logo HelpDog" />
        <h1 className="font-pangolin text-3xl md:text-4xl text-center max-w-80 md:max-w-96 mb-4 md:mb-6">
          Ajude quem realmente precisa da sua ajuda.
        </h1>
        <p className="font-roboto text-sm md:text-lg text-center max-w-64 md:max-w-96 mb-12">
          Com apenas 1 real você pode me ajudar a alimentar cães de ruas.
        </p>
        <Button label="Ajudar agora" />
      </div>
    </section>
  );
};
