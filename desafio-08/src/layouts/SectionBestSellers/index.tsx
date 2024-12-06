import React from "react";
import * as S from "./styles";

import Pizza1 from "../../assets/images/pizza-1.png";
import Pizza2 from "../../assets/images/pizza-2.png";
import Pizza3 from "../../assets/images/pizza-3.png";
import Pizza4 from "../../assets/images/pizza-4.png";

import { Card } from "../../components/Card";

export const SectionBestSellers: React.FC = () => {
  return (
    <S.Section>
      <S.Title>Mais vendidas</S.Title>
      <S.CardsContainer>
        <Card
          pizzaImage={Pizza1}
          title="La Vegan"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          price="29,90"
        />
        <Card
          pizzaImage={Pizza2}
          title="La Menta"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          price="25,50"
        />
        <Card
          pizzaImage={Pizza3}
          title="La Cuma"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          price="26,00"
        />
        <Card
          pizzaImage={Pizza4}
          title="La Toca"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          price="23,80"
        />
      </S.CardsContainer>
    </S.Section>
  );
};
