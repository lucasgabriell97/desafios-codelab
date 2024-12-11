import React from "react";
import DogImage from "../../assets/images/dog-2.png";

import { Button } from "../../components/Button";

export const StoriesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-14 max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img src={DogImage} alt="Imagem de um cachorro" />
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h2 className="font-pangolin text-2xl md:text-3xl text-center lg:text-start max-w-72 md:max-w-96 mb-6">
            Os cães falam, mas apenas para quem sabe ouvir.
          </h2>
          <p className="font-roboto text-sm md:text-xl text-center lg:text-start md:max-w-2xl mb-8 md:mb-12">
            Descubra histórias encantadoras, segredos reveladores e a profunda
            conexão entre humanos e seus leais companheiros. Prepare-se para uma
            jornada única, onde a linguagem dos cães ganha vida para aqueles que
            estão sintonizados com o inexplorado mundo canino.
          </p>
          <Button label="Saiba mais" />
        </div>
      </div>
    </section>
  );
};
