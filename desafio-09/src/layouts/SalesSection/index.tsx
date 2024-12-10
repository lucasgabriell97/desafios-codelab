import React from "react";
import FoodImage1 from "../../assets/images/dog-3.png"
import FoodImage2 from "../../assets/images/dog-4.png"
import FoodImage3 from "../../assets/images/dog-5.png"

import { PetFood } from "../../components/PetFood";

export const SalesSection: React.FC = () => {
  return (
    <section className="py-20 px-8">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-8 lg:max-w-6xl lg:mx-auto">
        <PetFood foodImage={FoodImage1} foodName="Special Dog" foodDescription="Oferece uma refeição completa rica em proteínas e vitaminas." />
        <PetFood foodImage={FoodImage2} foodName="Biscrok" foodDescription="Biscoitos crocantes em formato de ossos com cálcio e ômega 6." />
        <PetFood foodImage={FoodImage3} foodName="Drools" foodDescription="Pedaços reais de fígado de frango e frango em molho." />
      </div>
    </section>
  );
};
