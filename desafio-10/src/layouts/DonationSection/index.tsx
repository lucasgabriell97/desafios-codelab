import React from "react";

import IllustrativeChristmasImage from "../../assets/images/illustration.svg";

import { Button } from "../../components/Button";

export const DonationSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-52 lg:max-w-6xl lg:mx-auto">
        <div>
          <img
            src={IllustrativeChristmasImage}
            alt="Imagem ilustrativa de natal"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="title max-w-sm md:max-w-xl">Conectando generosidade ao redor do mundo</h2>
          <p className="text-lg md:text-2xl font-normal text-center lg:text-start text-dark mb-10 max-w-md md:max-w-xl">
            Celebre a magia do Natal de uma maneira especial! Descubra a
            plataforma que permite a doação de presentes significativos para
            aqueles que mais precisam. Faça parte do movimento e compartilhe o
            verdadeiro espírito da generosidade.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};
