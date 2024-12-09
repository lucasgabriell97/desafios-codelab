import React from "react";
import DogImage from "../../assets/images/dog-2.png";

import { Button } from "../../components/Button";

export const StoriesSection: React.FC = () => {
  return (
    <section>
      <div>
        <img src={DogImage} alt="Imagem de um cachorro" />
      </div>
      <div>
        <h2>Os cães falam, mas apenas para quem sabe ouvir.</h2>
        <p>
          Descubra histórias encantadoras, segredos reveladores e a profunda
          conexão entre humanos e seus leais companheiros. Prepare-se para uma
          jornada única, onde a linguagem dos cães ganha vida para aqueles que
          estão sintonizados com o inexplorado mundo canino.
        </p>
        <Button label="Saiba mais" />
      </div>
    </section>
  );
};
