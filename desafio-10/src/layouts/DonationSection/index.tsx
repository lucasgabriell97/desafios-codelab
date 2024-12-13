import React from "react";

import IllustrativeChristmasImage from "../../assets/images/illustration.svg";

import { Button } from "../../components/Button";

export const DonationSection: React.FC = () => {
  return (
    <section>
      <div className="py-20 px-6 flex flex-col items-center gap-16">
        <div>
          <img
            src={IllustrativeChristmasImage}
            alt="Imagem ilustrativa de natal"
          />
        </div>
        <div>
          <h2 className="title">Conectando generosidade ao redor do mundos</h2>
          <p className="text-lg font-normal text-center text-dark mb-10">
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
