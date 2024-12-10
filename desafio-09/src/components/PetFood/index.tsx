import React from "react";

import { Button } from "../Button";

interface PetFoodProps {
  foodImage: string;
  foodName: string;
  foodDescription: string;
}

export const PetFood: React.FC<PetFoodProps> = ({
  foodImage,
  foodName,
  foodDescription,
}) => {
  return (
    <div className="flex flex-col justify-center max-w-96 mx-auto">
      <div className="flex justify-center">
        <img className="mb-10" src={foodImage} alt="Imagem de comida de pet" />
      </div>
      <h2 className="font-pangolin text-2xl md:text-3xl mb-3">{foodName}</h2>
      <p className="font-roboto text-base md:text-xl mb-6 md:mb-10">
        {foodDescription}
      </p>
      <Button label="Comprar agora" />
    </div>
  );
};
